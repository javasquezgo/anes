module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          anes: "#034C81",
          sky: "#5BA2F4",
          whiteBone: "#fbfbfb",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
