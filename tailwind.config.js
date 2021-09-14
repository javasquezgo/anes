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
          soft: "#046ab3",
        },
        white: {
          bone: "#fbfbfb",
        },
        gray: {
          text: "#626262",
        },
      },
      backgroundImage: {
        hands: "url('~@/assets/image/bg-hands.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
