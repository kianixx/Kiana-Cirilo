export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        canvas: "rgb(var(--bg-canvas) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--bg-surface) / <alpha-value>)",
          alt: "rgb(var(--bg-surface-alt) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--text-primary) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-primary) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
          ink: "rgb(var(--accent-ink) / <alpha-value>)",
        },
        line: "rgb(var(--border-line) / <alpha-value>)",
        cloud: {
          blue: "rgb(var(--cloud-blue) / <alpha-value>)",
          lavender: "rgb(var(--cloud-lavender) / <alpha-value>)",
          pink: "rgb(var(--cloud-pink) / <alpha-value>)",
          periwinkle: "rgb(var(--cloud-periwinkle) / <alpha-value>)",
          soft: "rgb(var(--cloud-soft) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
