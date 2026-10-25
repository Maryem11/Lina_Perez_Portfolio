import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

const originalFetch = global.fetch;
const mockFetch = jest.fn();
beforeEach(() => { mockFetch.mockReset(); global.fetch = mockFetch; });
afterAll(() => { global.fetch = originalFetch; });

function fillForm() {
  fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Test Visitor" } });
  fireEvent.change(screen.getByLabelText("Your email"), { target: { value: "visitor@example.com" } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: "A question about your work & projects." } });
}

test("posts URL-encoded fields and resets only after a successful response", async () => {
  mockFetch.mockResolvedValue({ ok: true });
  render(<ContactForm previewOnly={false} />);
  fillForm();
  fireEvent.submit(screen.getByRole("form"));
  await screen.findByText("Thank you. Your message has been submitted.");
  const [url, request] = mockFetch.mock.calls[0];
  expect(url).toBe("/");
  expect(request.method).toBe("POST");
  expect(request.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");
  expect(Object.fromEntries(new URLSearchParams(request.body))).toEqual({
    "form-name": "contact", "bot-field": "", name: "Test Visitor", email: "visitor@example.com", message: "A question about your work & projects."
  });
  expect(screen.getByLabelText("Message")).toHaveValue("");
});

test.each(["http", "network"])("preserves the message after a %s failure", async (failure) => {
  if (failure === "http") mockFetch.mockResolvedValue({ ok: false });
  else mockFetch.mockRejectedValue(new Error("offline"));
  render(<ContactForm previewOnly={false} />);
  fillForm();
  fireEvent.submit(screen.getByRole("form"));
  await screen.findByText(/couldn’t confirm your submission/);
  expect(screen.getByLabelText("Message")).toHaveValue("A question about your work & projects.");
  expect(screen.getByRole("button", { name: /Send message/ })).toBeEnabled();
  expect(screen.queryByText(/Thank you/)).not.toBeInTheDocument();
});

test("local preview never submits or claims success", async () => {
  render(<ContactForm previewOnly />);
  fillForm();
  fireEvent.submit(screen.getByRole("form"));
  expect(screen.getByText(/Nothing was sent/)).toBeInTheDocument();
  expect(mockFetch).not.toHaveBeenCalled();
});

test("invalid and duplicate pending submissions are blocked", async () => {
  let finish: (value: { ok: boolean }) => void = () => {};
  mockFetch.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  render(<ContactForm previewOnly={false} />);
  fireEvent.submit(screen.getByRole("form"));
  expect(mockFetch).not.toHaveBeenCalled();
  fillForm();
  fireEvent.submit(screen.getByRole("form"));
  fireEvent.submit(screen.getByRole("form"));
  expect(mockFetch).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("button", { name: /Sending/ })).toBeDisabled();
  finish({ ok: true });
  await waitFor(() => expect(screen.getByText(/Thank you/)).toBeInTheDocument());
});
