
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        tenor: ['Tenor Sans'],
        joe: ['Josefin Slab', 'serif'],
        sans: ['Tenor Sans', 'serif'],
        twentieth: ['Twentieth']
        // palanquin: ['Palanquin', 'sans-serif'],
        // montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'footer': '#F3F3F3',
        'text': "#515151",
        'quote': "#201E1E",
        'primary': "#FCCFCF",
        'icon': "#9C9C9C",
        'hero': "#FFECEC",
        'navbg': "#F5F5F5",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
    },
  },
  plugins: [],
}
