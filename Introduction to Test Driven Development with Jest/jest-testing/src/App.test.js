/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch("My App");
  });
});
