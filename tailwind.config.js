/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#eff7ff",
          100: "#d8ecff",
          200: "#aed7ff",
          300: "#7bbcff",
          400: "#4f9eff",
          500: "#1f7fff",
          600: "#0f64e6",
          700: "#094dc0",
          800: "#093e98",
          900: "#0a3477",
        },
        accent: "#f59e0b",
        dark: "#0f172a",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
};
