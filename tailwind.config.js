/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#714423",
        highlight: '#bfa795',
        bgGray: "#e8e8e8",
      },
      fontFamily:{
        tillana:["Tillana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
