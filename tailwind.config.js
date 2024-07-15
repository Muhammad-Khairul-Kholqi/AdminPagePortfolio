/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'sans-serif'],
        'onest': ['OneST', 'sans-serif'], 
      },
      boxShadow: {
        'right': '5px 0 5px -2px #ededed',
      },
    },
  },
  plugins: [],
}
