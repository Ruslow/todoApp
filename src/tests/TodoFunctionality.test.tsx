import userEvent from "@testing-library/user-event";
import App from "../App";
import { render, screen, fireEvent } from "../test-utils/testing-library-utils";

test("todo list", () => {
  render(<App />);
  const form = screen.getByRole("form");
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("");

  userEvent.type(input, "wash the dishes");
  expect(input).toHaveValue("wash the dishes");

  fireEvent.submit(form);

  expect(input).toHaveValue("");

  const listItem = screen.getByText(/wash the dishes/i);
  expect(listItem).toBeInTheDocument();

  const crossButton = screen.getByAltText("cross");
  userEvent.click(crossButton);

  expect(listItem).not.toBeInTheDocument();
});
