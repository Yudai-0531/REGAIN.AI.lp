import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === REGAIN LP (WorX-style light theme) ===
        white: "#FFFFFF",
        "off-white": "#F8F8F8",
        "light-gray": "#EEF0F2",
        black: "#080808",
        "dark-gray": "#1A1A1A",
        "main-red": "#D71920",
        "deep-red": "#9F1118",
        "pale-red": "#FFE8EA",

        // セマンティック・トークン
        bg: "#FFFFFF",
        surface: "#F8F8F8",
        "surface-2": "#EEF0F2",
        ink: "#111827",
        "ink-sub": "#4B5563",
        "ink-mute": "#6B7280",
        primary: "#D71920",
        "primary-dark": "#9F1118",
        "primary-pale": "#FFE8EA",
        cta: "#111111",
        "cta-hover": "#000000",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "var(--font-inter)", "system-ui", "sans-serif"],
        en: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.01em",
        wider2: "0.16em",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
