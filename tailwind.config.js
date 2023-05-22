/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Astro", "sans-serif"],
        subtitle: ["Opinion Pro Extended", "sans-serif"],
        body: ["Opinion Pro Condensed", "sans"],
      },
      colors: {
        "deep-bg": "#111111",
        accent: "#0292FE",
        body: "#FFF9EB",
        dim: "#B3AEA4",
      },
    },
  },
  plugins: [],
};
