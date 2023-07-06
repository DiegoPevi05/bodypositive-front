/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#1211CA",
        secondary: "#F9B314",
        tertiary: "#101010",
        fourth: "#fff",
        fifth: "#6669C6",
        sixth: "#F1F1F0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        cardlight:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        heading: ['Montserrat-ExtraBold','sans-serif'],
        body: ['Montserrat','serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

