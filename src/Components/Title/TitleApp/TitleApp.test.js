import { render, screen } from "@testing-library/react";
import TitleApp from "./TitleApp";

test("renders title div", () => {
  render(<TitleApp />);
  const title = screen.getByText(/Mars Drone/i);
  expect(title).toBeInTheDocument();
});
