module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sdk/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@hungphongbk/vth-sdk/**/*.js",
  ],
  // important: "#__next",
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      colors: {
        primary: "#FFDE50",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
