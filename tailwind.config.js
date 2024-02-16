module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        lightGray: "#efefef",
        black: "#000000",
        primary: "#0d7334",
        secondary: "#9DBC98",
        tertiary: "#EBD9B4",
        lightbg: "F9EFDB",
        danger: "#A76F6F",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        'aboutbanner': "url('./assets/images/aboutBanner.jpg')", 
        'aboutbanner2': "url('./assets/images/aboutBanner2.jpg')",
        'technology':"url('./assets/images/technology.png)",
        'business':"url('./assets/images/business.png)",
        'cloudkitchen':"url('./assets/images/cloudkitchen.png)",
      }
    },
  },
  variants: {},
  plugins: [],
};
