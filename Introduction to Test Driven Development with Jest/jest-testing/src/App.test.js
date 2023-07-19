/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: "Mocked Data" }),
}));

describe("App component", () => {
  it("renders API data", async () => {
    const { findByText } = render(<App />);

    const dataElement = await findByText("Mocked Data");

    expect(dataElement).toBeTruthy();
  });
});
