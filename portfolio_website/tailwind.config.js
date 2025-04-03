/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0908',
        'secondary': '#c6ac8f',
        'tertiary': '#333533',
        'primary-text': '#eae0d5',
        'linkedinBlue': '#0077B5',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #242423, #333533)'
      }
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.underline-middle-expand': {
          position: 'relative',
          display: 'inline-block',
        },
        '.underline-middle-expand::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '0',
          height: '2px',
          backgroundColor: theme('colors.secondary'),
          transition: 'all 0.2s ease-out',
        },
        '.underline-middle-expand:hover::after': {
          left: '0',
          width: '100%',
        },
        '.hover-translate-y': {
          transform: 'translateY(0)',
          transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
        },
        '.hover-translate-y:hover': {
          transform: 'translateY(-10px)',
          transition: 'transform 0.2s ease-out',
        },
      });
    },
  ],
};
