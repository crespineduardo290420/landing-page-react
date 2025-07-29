/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        adobe: "#FF2BC2",
        skecth: "#FDAD00",
        figma: "#1E1E1E",
        footer: "#2E3E5C",
      }
    },
  },
  plugins: [],
}

