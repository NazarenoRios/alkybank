/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'primary': '#C8EE44',
        'secondary': '#29A073',
        'error': '#E5363D',
        'success': '#19D076',
        'text1': '#1B212D',
        'text2': '#929EAE',
        'text3': '#ff77e9',
        'dark1': '#201E34',
        'dark2': '#282541',
        'dark_bg': '#1C1A2E',
        'dark_shade': '#1E1C30',
        'key_black': '#363A3F',
        'gray1': '#FAFAFA',
        'gray2': '#F8F8F8',
        'gray3': '#F5F5F5',
      },
      fontFamily: {
        KumbhSans:['Kumbh Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}