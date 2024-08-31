import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../ContactUs";
import store from "../../utils/store";
test("Should load for contact render", () => {
  render(<Contact />);
  const heading = screen.getAllByRole("heading");
  expect(heading[0]).toBeInTheDocument();
});
