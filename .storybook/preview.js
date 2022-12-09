import { create } from "@storybook/theming";
import ArisGlobalLogo from "../src/assets/images/ArisGlobalLogo.png";

const lightTheme = create({
  base: "light",
  brandImage: ArisGlobalLogo,
});

const darkTheme = create({
  base: "dark",
  brandImage: ArisGlobalLogo,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};
