/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C82FC",
        navlink: "#394360",
        body: "#222831",
        title: "#22293E",
        secondary: "#A2B3BF",
        accent: "#44E4C9",
        "light-purple": "#F8F8FF",
      },
    },
  },
  plugins: [],
};
