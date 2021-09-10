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
      },
      backgroundImage: {
        hands: "url('~@/assets/image/bg-hands.jpg')",
        enfermera: "url('~@/assets/image/enfermeras.jpg')",
        enfermeraMovil: "url('~@/assets/image/enfermera-movil.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
