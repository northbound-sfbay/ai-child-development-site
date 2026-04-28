/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#102a43",
        ink: "#182334",
        muted: "#5d6b7a",
        line: "#d8e0e8",
        panel: "#f7f9fb",
        teal: "#2a9d8f",
        sage: "#8ab17d",
        ochre: "#c99745",
        clay: "#b86b55"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"]
      }
    }
  }
};
