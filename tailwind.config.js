/** @type {import('tailwindcss').Config} */
export default {
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
        "light-bg": "#3f3f46",
        warn: "#D72638",
        accent: "#0292FE",
        body: "#FFF9EB",
        dim: "#B3AEA4",
      },
      menuTransitionDuration: {
        open: "300ms",
      },
      transitionDuration: ({ theme }) => ({
        "menu-open": theme("menuTransitionDuration.open"),
      }),
      transitionDelay: ({ theme }) => ({
        "menu-open": theme("menuTransitionDuration.open"),
      }),
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-text-fill")],
};
