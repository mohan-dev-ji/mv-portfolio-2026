import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    borderRadius: {
      none: "0px",
      DEFAULT: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "9999px",
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-fira-code)", "Fira Code", "ui-monospace", "monospace"],
      },
      colors: {
        bg:         "var(--color-bg)",
        primary:    "var(--color-primary)",
        secondary:  "var(--color-secondary)",
        muted:      "var(--color-muted)",
        accent:         "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        border:     "var(--color-border)",
        card:       "var(--color-card)",
        "image-bg": "var(--color-image-bg)",
        "btn-text": "var(--color-btn-text)",
      },
      maxWidth: {
        container: "1282px",
      },
      spacing: {
        section:      "64px",
        "item-gap":   "32px",
        gutter:       "64px",
        "gutter-sm":  "24px",
      },
      dropShadow: {
        product: "0 8px 24px rgba(0, 0, 0, 0.8)",
      },
      fontSize: {
        // Desktop sizes — use with md: prefix on mobile-first approach
        display:        ["6rem",      { lineHeight: "1.2", fontWeight: "600" }],
        h2:             ["2rem",      { lineHeight: "1.2", fontWeight: "500" }],
        subheading:     ["1.5rem",    { lineHeight: "1.3", fontWeight: "400" }],
        body:           ["1rem",      { lineHeight: "1.6", fontWeight: "400" }],
        // Mobile sizes
        "display-sm":   ["3rem",      { lineHeight: "1.0", fontWeight: "600" }],
        "h2-sm":        ["1.5rem",    { lineHeight: "1.2", fontWeight: "500" }],
        "subheading-sm":["1.0rem",  { lineHeight: "1.3", fontWeight: "400" }],
        "body-sm":      ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
