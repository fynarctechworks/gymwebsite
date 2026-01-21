/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E21E1E",
        "background-light": "#FFFFFF",
        "background-dark": "#0A0A0A",
        "accent-dark": "#1A1A1A",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
}
