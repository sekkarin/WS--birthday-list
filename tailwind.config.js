/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "mainPrimary":"#F28AB2",
        "secondaryPrimary":"#F1E6EA",
        "secondarySecondary":"#B38870",
        // "ba"
      }
    },
  },
  plugins: [],
  
};
