import { render, screen } from "@testing-library/react";
import Secondary from "./Secondary";

test("renders title div", () => {
  render(<Secondary title="Mars Drone Secondary" />);
  const title = screen.getByText(/Mars Drone Secondary/i);
  expect(title).toBeInTheDocument();
});
