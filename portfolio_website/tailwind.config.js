/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E7D8C9',
        'secondary': '#59544B',
        'primary-text': '#0B0033',
        'linkedinBlue': '#0077B5',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
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
          backgroundColor: theme('colors.black'), // Use black or customize with any color
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
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        },
      });
    },
  ],
};
