/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/css/**/*.scss",
    "./src/js/**/*.js",
    "./src/pages/**/*.cr",
    "./src/components/**/*.cr",
    "./src/svgs/**/*.svg",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Astro', 'sans-serif'],
        subtitle: ['Opinion Pro Extended', 'sans-serif'],
        body: ['Opinion Pro Condensed', 'sans'],
      },
      colors: {
        'deep-bg': "#000000",
        'accent': "#0292FE",
        'body': "#FFF9EB",
        'dim': "#B3AEA4"
      },
    },
    keyframes: {
      'fade-in': {
        '0%': { visibility: 'hidden', opacity: 0 },
        '100%': { visibility: 'visible', opacity: 1 },
      },
      'fade-out': {
        '0%': { visibility: 'visible', opacity: 1 },
        '100%': { visibility: 'hidden', opacity: 0 },
      },
      'slide-to-r': {
        '0%': { traslateX: '-100%' },
        '100%': { traslateX: '0' },
      },
      'slide-to-l': {
        '0%': { traslateX: '100%' },
        '100%': { traslateX: '0' },
      },
    },
    animation: {
      'fade-in-slowest': 'fade-in 1000ms ease-out forwards',
      'fade-in-slower': 'fade-in 500ms ease-out forwards',
      'fade-in-slow': 'fade-in 300ms ease-out forwards',
      'fade-in': 'fade-in 150ms ease-out forwards',
      'fade-out-slowest': 'fade-out 1000ms ease-out forwards',
      'fade-out-slower': 'fade-out 500ms ease-out forwards',
      'fade-out-slow': 'fade-out 300ms ease-out forwards',
      'fade-out': 'fade-out 150ms ease-out forwards',
      'slide-to-r-slowest': 'slide-to-r 1000ms ease-out forwards',
      'slide-to-r-slower': 'slide-to-r 500ms ease-out forwards',
      'slide-to-r-slow': 'slide-to-r 300ms ease-out forwards',
      'slide-to-r': 'slide-to-r 150ms ease-out forwards',
      'slide-to-l-slowest': 'slide-to-l 1000ms ease-out forwards',
      'slide-to-l-slower': 'slide-to-l 500ms ease-out forwards',
      'slide-to-l-slow': 'slide-to-l 300ms ease-out forwards',
      'slide-to-l': 'slide-to-l 150ms ease-out forwards',
    },
  },
  plugins: [],
}

