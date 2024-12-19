/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        260: "65rem",
        250: "59.6rem",
        180: "44rem",

        130: "32.6rem",
        100: "24.9rem",
      },
    },
    screens: {
      tablet: "580px",
      bigtab: "768px",
      xl: "1280px",
      lg: "1024px",
    },
  },
  plugins: [],
};
