/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: ['vertical-rl', 'vertical-lr'],
      colors: {
        colordarkbg: "#333333",
        colordarksecond: "#1f1f1f",
        colordarklogo: "#878cc5",

        colorbrightbg: "#cccccc",
        colorbrightsecond: "#004953",
        colorbrightlogo: "#008080",
        navcolor:"#b2b2b2",
      },
    },
  },
  plugins: [],
};
