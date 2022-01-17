const colors = require("tailwindcss/colors");

const customColor = {
  prime: {
    lighter: colors.sky[200],
    light: colors.sky[300],
    DEFAULT: colors.sky[400],
    dark: colors.sky[500],
    darker: colors.sky[600],
  },
  minor: {
    lighter: colors.zinc[300],
    light: colors.zinc[400],
    DEFAULT: colors.zinc[500],
    dark: colors.zinc[600],
    darker: colors.zinc[700],
  },
  thrive: {
    lighter: colors.emerald[200],
    light: colors.emerald[300],
    DEFAULT: colors.emerald[400],
    dark: colors.emerald[500],
    darker: colors.emerald[600],
  },
  exhort: {
    lighter: colors.purple[200],
    light: colors.purple[300],
    DEFAULT: colors.purple[400],
    dark: colors.purple[500],
    darker: colors.purple[600],
  },
  hazard: {
    lighter: colors.red[200],
    light: colors.red[300],
    DEFAULT: colors.red[400],
    dark: colors.red[500],
    darker: colors.red[600],
  },
  tragic: {
    lighter: colors.zinc[800],
    light: colors.zinc[900],
    DEFAULT: colors.black,
  },
  blaze: {
    DEFAULT: colors.white,
    dark: colors.zinc[100],
    darker: colors.zinc[200],
  },
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      // sans: ["HelveticaNowText", ...defaultTheme.fontFamily.sans],
      // mono: ["Ellograph", ...defaultTheme.fontFamily.mono],
      // display: ["AvenirNextCyr", ...defaultTheme.fontFamily.sans],
      // serif: ["VVDS", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        ...customColor,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
