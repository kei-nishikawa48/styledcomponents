import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

const theme1 = {
  name:"default",
  colors: {
    primary: "#ff0000",
    secondary: "#00ff",
    success: "#00ff00",
  },
};
const theme2 = {
  name:"aaa",
  colors: {
    primary: "#0000ff",
    secondary: "#ff00ff",
    success: "#ff0000",
  },
};
const themes = [theme1, theme2];

addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // .storybook/preview.js
};
