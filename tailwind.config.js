module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto", "serif"],
        slab: ["Roboto Slab"],
      },
      colors: {
        blue: {
          anes: "#034C81",
          sky: "#5BA2F4",
          soft: "#046ab3",
        },
        white: {
          bone: "#fbfbfb",
          clear: "#fff",
          dirty: "#f7f7f7",
        },
        gray: {
          text: "#626262",
          title: "#363636",
        },
      },

      height: {
        image: "300px",
        back: "650px",
        card: "436px ",
      },

      width: {
        mini: "320px",
        medium: "450px",
        list: "600px",
        history: "90%",
      },

      backgroundImage: {
        hands: "url('~@/assets/image/bg-hands.webp')",
        enfermera: "url('~@/assets/image/enfermeras.jpg')",
        enfermeraMovil: "url('~@/assets/image/enfermera-movil.webp')",
        nurses: "url('~@/assets/image/nurses.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
