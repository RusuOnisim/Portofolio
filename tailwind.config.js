/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: ['vertical-rl', 'vertical-lr'],
      colors: {
        colorbg: "#333333",
        colorsecond: "#1f1f1f",
        colorlogo: "#878cc5"
      },
    },
  },
  plugins: [],
};
