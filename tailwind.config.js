/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        klein: "#0047FF",
        vermilion: "#FF4D00",
        ink: "#09090B",
        gridline: "#E5E7EB",
        "gridline-dark": "#D1D5DB",
        surface: "#FFFFFF",
        "surface-dim": "#F8FAFC",
        "surface-subtle": "#F1F5F9"
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Hanken Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      borderWidth: {
        '1': '1px',
        '1.5': '1.5px',
        '2': '2px',
        '3': '3px'
      }
    },
  },
  plugins: [],
}
