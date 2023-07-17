/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: { primary: "#B51200", secondary: "#F4A900", bgd: "#F9F9F9" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
