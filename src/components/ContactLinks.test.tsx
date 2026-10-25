import React from "react";
import { render, screen } from "@testing-library/react";
import ContactLinks from "./ContactLinks";

test("contact uses a form and LinkedIn without exposing a recipient email", () => {
  const { container } = render(<ContactLinks />);
  expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  expect(screen.getByRole("form", { name: "Contact Lina" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Connect with Lina.*LinkedIn/ })).toHaveAttribute("href", "https://www.linkedin.com/in/lina-perez-romero/");
});
