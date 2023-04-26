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
        'text-body': ['Opinion Pro Condensed', 'sans'],
      },
      colors: {
        'cosmic-latte': "#FFF9EB",
        'persian-blue': "#0292FE",
        'eerie-black': "#212221",
      },
    },
  },
  plugins: [],
}

