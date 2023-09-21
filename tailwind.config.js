/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {colors: {
      "thrd-pink": '#ffd8b1'
    },
  },
  plugins: [require("daisyui")],
  }
}
