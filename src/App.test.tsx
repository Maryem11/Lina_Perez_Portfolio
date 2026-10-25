import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
test("exposes seven native skill controls and the three selected repositories", () => {
  render(<App />);
  expect(screen.getAllByRole("button", { name: /^Explore / })).toHaveLength(7);
  const projects = screen.getByRole("region", {
    name: "Ideas put into practice.",
  });
  expect(within(projects).getAllByRole("listitem")).toHaveLength(3);
  expect(
    within(projects)
      .getAllByRole("link", { name: /^View .* repository$/ })
      .map((a) => a.getAttribute("href")),
  ).toEqual([
    "https://github.com/Maryem11/Breast_Cancer_Classification",
    "https://github.com/Maryem11/Tree_Classifier",
    "https://github.com/Maryem11/Ecommerce-Orders-Dashboard",
  ]);
});
test("skill dialog traps both tab boundaries, closes, and restores its opener", () => {
  render(<App />);
  const opener = screen.getByRole("button", { name: "Explore Python" });
  opener.focus();
  fireEvent.click(opener);
  const dialog = screen.getByRole("dialog", { name: "Python" });
  const close = within(dialog).getByRole("button", {
    name: "Close skill details",
  });
  const links = within(dialog).getAllByRole("link");
  close.focus();
  fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
  expect(links[links.length - 1]).toHaveFocus();
  fireEvent.keyDown(links[links.length - 1], { key: "Tab" });
  expect(close).toHaveFocus();
  fireEvent.click(close);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(opener).toHaveFocus();
});

test.each(["Tableau", "Excel"])(
  "%s honestly presents empty related work and keeps focus contained",
  (label) => {
    render(<App />);
    const opener = screen.getByRole("button", { name: `Explore ${label}` });
    opener.focus();
    fireEvent.click(opener);
    const dialog = screen.getByRole("dialog", { name: label });
    expect(
      within(dialog).getByText(
        "No project repository is listed for this skill yet.",
      ),
    ).toBeInTheDocument();
    expect(within(dialog).queryByRole("link")).not.toBeInTheDocument();
    const close = within(dialog).getByRole("button");
    close.focus();
    fireEvent.keyDown(close, { key: "Tab" });
    expect(close).toHaveFocus();
    fireEvent.keyDown(close, { key: "Tab", shiftKey: true });
    expect(close).toHaveFocus();
    fireEvent.click(close);
    expect(opener).toHaveFocus();
  },
);

test("all skill details use supported summaries without per-tool years or placeholder links", () => {
  render(<App />);
  const projects = screen.getByRole("region", {
    name: "Ideas put into practice.",
  });
  const supportedLinks = within(projects)
    .getAllByRole("link")
    .map((link) => link.getAttribute("href"));
  expect(screen.getByText(/5\+ years of experience/)).toBeInTheDocument();
  for (const leaf of screen.getAllByRole("button", { name: /^Explore / })) {
    fireEvent.click(leaf);
    const dialog = screen.getByRole("dialog");
    expect(dialog).not.toHaveTextContent(/years of experience|real-time/i);
    for (const link of within(dialog).queryAllByRole("link")) {
      expect(supportedLinks).toContain(link.getAttribute("href"));
    }
    fireEvent.click(within(dialog).getByRole("button"));
  }
});
