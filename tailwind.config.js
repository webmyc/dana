module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        'deep-forest-teal': '#145D52', // primary bg, headers
        'sage': '#4E7C6C',            // secondary bg, accents
        'earth-brass': '#A67C52',     // icons, overlays, secondary CTAs
        'earth-brass-dark': '#8B6843',// hover, dark variant
        'soft-cream': '#F5F3EE',      // light backgrounds, cards
        'vibrant-ochre': '#EFFF40',   // primary CTAs, highlights
        'dusty-rose': '#C799A3',      // links, subtle highlights
        'charcoal': '#333',           // text on light
        'offwhite': '#FAFAF7',        // alt light bg
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '6': '48px',
        '8': '64px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(20,93,82,0.08)',
        lift: '0 8px 32px rgba(20,93,82,0.16)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      letterSpacing: {
        wide: '.08em',
        wider: '.12em',
        widest: '.16em',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}; 