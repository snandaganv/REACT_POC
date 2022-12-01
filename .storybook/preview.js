import { create } from "@storybook/theming";
import ArisGlobalLogoDark from "../src/assets/images/ArisGlobalLogoDark.svg";
import ArisGlobalLogoLight from "../src/assets/images/ArisGlobalLogoLight.svg";

const lightTheme = create({
  base: "light",
  brandImage: ArisGlobalLogoLight,
});

const darkTheme = create({
  base: "dark",
  brandImage: ArisGlobalLogoDark,
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
