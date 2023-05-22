/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#148a10",
        },
        primary: {
          DEFAULT: "#7baa4c",
          dark: "#5c8e29",
        },
        secondary: {
          DEFAULT: "#f0f3f5",
          dark: "#64748b",
        },
      },
      boxShadow: {
        "3xl": "-4px 4px 10px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
