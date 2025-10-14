/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // mantiene compatibilidad con API routes
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        kiu: {
          purple: "#2E0E73",
          blue: "#00BFFF",
          dark: "#0C0E2B",
          light: "#7CFC00",
        },
      },
      backgroundImage: {
        "kiu-gradient":
          "linear-gradient(to bottom, #180B3A, #2E0E73, #0C0E2B)",
      },
    },
  },
  plugins: [],
};
