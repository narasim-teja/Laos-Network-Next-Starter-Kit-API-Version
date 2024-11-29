import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#25143B",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#432673",
          hover: "#523282",
        },
        secondary: {
          DEFAULT: "#1a0d29",
          hover: "#2a1747",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    'bg-primary',
    'hover:bg-primary-hover',
    'bg-secondary',
    'hover:bg-secondary-hover',
    'text-foreground',
    'bg-background',
    {
      pattern: /(bg|text|border)-(primary|secondary|background|foreground)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
}

export default config;
