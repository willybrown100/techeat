/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      headings: "Roboto Slab,sans-serif",
      body: "Inter,sans-serif",
    },
    extend: {
      colors: {
        brand: "#F16331",
        Btnhover: "#e97950",
      },
    },
  },
  plugins: [],
};

