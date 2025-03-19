/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2F74FA",
          600: "#2761D0",
          700: "#1F4DA7",
          800: "#183A7D",
          900: "#102753",
        },
        grey: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        red: "#E82627",
        yellow: "#FDB92C",
        green: "#3EE224",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },

      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "20px",
        bodyxl: "20px",
        bodylg: "16px",
        bodymd: "14px",
        bodysm: "12px",
        bodyxs: "10px",
      },

      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
    },
  },
  plugins: [],
};
