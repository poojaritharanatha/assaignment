/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: { "100": "#fb8a59", "200": "#e7734f" },
        d: "#0e0e0e",
        darkkhaki: "#ccc864",
        gray: "#0e0d0d",
        ffffff: "#fff",
        "header-glass": "rgba(14, 14, 14, 0.87)",
      },
      fontFamily: { "roboto-mono-regular-16": "'Roboto Mono'", inter: "Inter" },
    },
    fontSize: {
      "13xl": "32px",
      lg: "18px",
      "101xl": "120px",
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      "26xl": "45px",
      "9xl": "28px",
    },
    screens: {
      lg: { max: "1200px" },
      mq350small: { raw: "screen and (max-width: 350px)" },
    },
  },
  corePlugins: { preflight: false },
};
