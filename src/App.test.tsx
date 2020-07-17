import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome to the Lucky Sloth!")).toBeInTheDocument();
});
