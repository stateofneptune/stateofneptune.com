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
    },
  },
  plugins: [],
}

