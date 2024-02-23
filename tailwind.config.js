/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="night"]'],
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "night",
    base: true,
    styled: true,
    utils: true,
    prefix: "dui-",
    logs: true,
    themeRoot: ":root"
  }
};
