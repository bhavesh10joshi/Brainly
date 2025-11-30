/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color:{
      purple:{
        600 : "#2f27ce" , 
        400 : "#433bff" ,
        300 : "#dedcff" 
      }
    }
  },
  plugins: [],
}
