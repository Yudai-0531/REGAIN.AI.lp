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
        base: "#0B0F14",
        surface: "#121821",
        "text-main": "#F8FAFC",
        "text-sub": "#CBD5E1",
        primary: "#C8102E",
        "primary-dark": "#8F0B20",
        accent: "#F59E0B",
        "light-bg": "#F8FAFC",
        "light-text": "#111827",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "Inter", "system-ui", "sans-serif"],
        en: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
