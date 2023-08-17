import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/use-case-10/i);
  expect(linkElement).toBeInTheDocument();
});
