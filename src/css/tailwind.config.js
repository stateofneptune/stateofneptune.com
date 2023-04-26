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
  },
  plugins: [],
}

