// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

const mockDataInput = jest.fn((cardholder, cardnumber) => {
  return Promise.resolve({ cardholder, cardnumber });
});


it("should display required error when value is invalid", async () => {
  render(<App login={mockDataInput} />);

  fireEvent.submit(screen.getByRole("button"));

  expect(await screen.findAllByRole("alert")).toHaveLength(4);
  expect(mockDataInput).not.toBeCalled();
});