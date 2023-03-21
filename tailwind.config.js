/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      WorkSans: ["Work Sans", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        error: "#C83532",
        mauve: "#5F26D9",
        orange: "EE5527",
        blue: "#0546ED",
        green: "#22BEB7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "my-theme": {
          primary: "#5F26D9",
          secondary: "#0546ED",
          error: "#C83532",
          info: "#22BEB7",
          accent: "#F9B915",
          success: "#22BEB7",
          warning: "#EE5527",
          neutral: "#15141F",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
