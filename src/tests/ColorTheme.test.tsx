import userEvent from "@testing-library/user-event";
import App from "../App";
import { render, screen } from "../test-utils/testing-library-utils";

test("changes color theme", () => {
  render(<App />);

  const themeSwitcher = screen.getByAltText(/switch color theme./i);
  expect(themeSwitcher).toHaveAttribute("src", "icon-sun.svg");

  const bannerImg = screen.getByRole("banner");
  expect(bannerImg).toHaveStyle("background-image: url(bg-mobile-dark.jpg)");

  const background = screen.getByTestId("background");
  expect(background).toHaveStyle("background-color: hsl(235,21%,11%)");

  const todoBox = screen.getByTestId("todobox");
  expect(todoBox).toHaveStyle("background-color: hsl(234,24%,19%)");
  expect(todoBox).toHaveStyle("color: hsl(234,39%,85%)");

  const todoFilter = screen.getByTestId("footerMobile");
  expect(todoFilter).toHaveStyle("background-color: hsl(234,24%,19%)");
  expect(todoFilter).toHaveStyle("color: hsl(234,11%,52%)");

  userEvent.click(themeSwitcher);

  expect(themeSwitcher).toHaveAttribute("src", "icon-moon.svg");

  const lightBanner = screen.getByRole("banner");
  expect(lightBanner).toHaveStyle("background-image: url(bg-mobile-light.jpg)");

  expect(background).toHaveStyle("background-color: hsl(236,33%,92%)");

  expect(todoBox).toHaveStyle("background-color: hsl(0,0%,98%)");
  expect(todoBox).toHaveStyle("color: hsl(235,19%,35%)");

  expect(todoFilter).toHaveStyle("background-color: hsl(0,0%,98%)");
  expect(todoFilter).toHaveStyle("color: hsl(236,9%,61%)");

  userEvent.click(themeSwitcher);

  expect(themeSwitcher).toHaveAttribute("src", "icon-sun.svg");

  const darkBanner = screen.getByRole("banner");
  expect(darkBanner).toHaveStyle("background-image: url(bg-mobile-dark.jpg)");

  expect(background).toHaveStyle("background-color: hsl(235,21%,11%)");

  expect(todoBox).toHaveStyle("background-color: hsl(234,24%,19%)");
  expect(todoBox).toHaveStyle("color: hsl(234,39%,85%)");

  expect(todoFilter).toHaveStyle("background-color: hsl(234,24%,19%)");
  expect(todoFilter).toHaveStyle("color: hsl(234,11%,52%)");
});
