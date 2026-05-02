import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans", "Noto Sans SC", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif SC", "Source Han Serif SC", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        ink: "#102033",
        paper: "#f8fafc",
        academic: "#12355b",
        "academic-2": "#1f5f8b",
        signal: "#d97706",
        line: "#d8e0ea"
      },
      borderRadius: {
        card: "0.5rem"
      },
      boxShadow: {
        academic: "0 18px 60px -32px rgb(18 53 91 / 0.45)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both"
      }
    }
  },
  plugins: [typography, animate]
};
