import { create } from "@storybook/theming";

const lightTheme = create({
  base: "light",
  appBg: "white",
  colorPrimary: "#3377FF",
  colorSecondary: "#3377FF",
  brandImage:
    "https://design.arisglobal.com/assets/images/AgLogo_new.svg",
});

const darkTheme = create({
  base: "dark",
  appBg: "#212121",
  colorPrimary: "#49CEF9",
  colorSecondary: "#49CEF9",
  appContentBg: "#212121",
  barBg: "#212121",
  brandImage:
    "https://design.arisglobal.com/assets/images/AgLogo_new.svg",
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: darkTheme,
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};

import "../src/index.css";
