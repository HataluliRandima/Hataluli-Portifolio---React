/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: "#04DFBE",
        darkColor: "#2D474E",
      },
    },
    fontFamily: {
      signature: ["Sedgwick Ave Display"],
    }
  },
  plugins: [],
}

