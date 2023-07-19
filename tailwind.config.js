/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#191919",
        "100": "#000",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      yellow: {
        "100": "#FFF212",
      },
    },
    fontFamily: {
      'chewy': ["'Chewy', cursive"],
      'days-one': ["'Days One', sans-serif"]
    }
  },
  plugins: [],
}
