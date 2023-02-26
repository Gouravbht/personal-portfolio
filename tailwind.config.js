/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(4,7,47)",
        secondary: "white",
        accent: "#4B56D2",
      },
    },
    plugins: [require("preline/plugin")],
  },
};
