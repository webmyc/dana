module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#0F4F40',
        'earth-brass': '#A67C52',
        'light-neutral': '#F5F5F5',
        'neon-lemon': '#EFFF40',
      },
      fontFamily: {
        heading: ['Oswald', 'Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 