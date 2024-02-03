/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangered: "#ff0000",
        black: "#151811",
        bac: "#e3e7df",
        para: "#878986",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
      fontSize: {
        h1hero: "clamp(2rem, 1.2015rem + 3.3981vw, 3.75rem);",
      },
    },
  },
  plugins: [],
};
