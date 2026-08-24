/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        space: {
          950: "#0B0F19",
        },
        ink: {
          950: "#0A0D12",
          900: "#0D1117",
          800: "#131922",
          700: "#1C2530",
        },
        teal: {
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
        },
        amber: {
          300: "#FCD34D",
          400: "#F59E0B",
          500: "#D97706",
        },
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: 0.75 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
