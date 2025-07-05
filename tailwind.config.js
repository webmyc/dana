module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#145D52',      // primary text & dark sections
        'warm-brass': '#A67C52',     // secondary buttons, icons
        'soft-cream': '#FAF8F4',     // hero text, light backgrounds
        'pastel-sage': '#E8F3EF',    // alt section bg
        'dusty-rose': '#ECD8D9',     // decor shape fills
        'vibrant-ochre': '#EFFF40',  // primary CTA & hovers
        'charcoal': '#333',          // text on light
        'offwhite': '#FAFAF7',       // alt light bg
        'white': '#fff',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
        h2: ['2.25rem', { lineHeight: '1.15' }],
        h3: ['1.5rem', { lineHeight: '1.2' }],
        base: ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '6': '48px',
        '8': '64px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(15,79,64,0.08)',
        lift: '0 8px 32px rgba(239,255,64,0.3)', // ochre glow
        glow: '0 0 0 4px #EFFF40',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
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