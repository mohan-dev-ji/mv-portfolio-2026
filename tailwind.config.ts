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
        accent:     "var(--color-accent)",
        border:     "var(--color-border)",
        card:       "var(--color-card)",
        "image-bg": "var(--color-image-bg)",
        "btn-text": "var(--color-btn-text)",
      },
      maxWidth: {
        container: "1282px",
      },
      spacing: {
        section:  "64px",
        "item-gap": "32px",
      },
      fontSize: {
        display:    ["96px", { lineHeight: "1.2",  fontWeight: "600" }],
        h2:         ["32px", { lineHeight: "1.2",  fontWeight: "500" }],
        subheading: ["24px", { lineHeight: "1.3",  fontWeight: "400" }],
        body:       ["16px", { lineHeight: "1.6",  fontWeight: "400" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
