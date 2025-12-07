/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#171717",        // main text color
        subtle: "#525252",      // subtle gray for dates
        badge: "#f3f3f3",       // badge background
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace"
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif"
        ],
      },
      fontSize: {
        'resume-title': '1.75rem',
        'resume-subtitle': '0.85rem',
      },
      boxShadow: {
        inset: "0 0 0 1px #e5e5e5 inset",
      },
    },
  },
  plugins: [],
};
