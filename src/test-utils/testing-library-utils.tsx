import { render } from "@testing-library/react";
import { Provider } from "../context/Context";

const renderWithContext = (ui: any, options?: any) =>
  render(ui, { wrapper: Provider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
