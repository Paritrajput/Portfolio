/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        260: "65rem",
        250: "59.6rem",
        180: "44rem",
        150: "40rem",

        130: "32.6rem",
        100: "24.9rem",
      },
      colors: {
        "main-black": "hsl(240, 2%, 12%)",
        jet: "hsl(0, 0%, 22%)",
        navbarColor: " hsla(240, 1%, 17%, 0.75)",
        jet2: "hsla(240, 1%, 18%, 0.251) 0%",
        jet3: "hsla(240, 2%, 11%, 0) 100%",
      },
    },
    screens: {
      tablet: "580px",
      bigtab: "768px",
      xl: "1240px",
      lg: "1024px",
    },
  },
  plugins: [],
};
