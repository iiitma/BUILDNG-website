module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
      'serif': ['PPRadioGrotesk', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']

    },
    extend: {
      colors: {
        primary: '#3aafa9',
        secondary: '#def2f1',
        dark: '#212529',
        alt: '#2b7a78',
        deep: '#17252a',
      },
      backgroundImage: {
        'world-svg': "url('../assets/svgs/world-bg.svg')",
        'education': "url('../assets/webp/education.webp')",
        'geo': "url('../assets/webp/geo.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
