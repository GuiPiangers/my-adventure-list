/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5F7CE3",
        primaryActive: "#7F98F1",
        light: {
          100: "#F9F9F9",
          200: "#F4F4F4",
          300: "#F0F0F0",
          400: "#ECECEC",
          500: "#D9D9D9",
        },
        priority: {
          lvl1: "#7CD08A",
          lvl2: "#7089E2",
          lvl3: "#D6A65E",
          lvl4: "#D07C7C",
        },
        atributeBar: "#D3883E",
      },
    },
  },
  plugins: [],
};
