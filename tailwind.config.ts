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
      // Portfolio v2
      "v2-sm": "var(--radius-sm)",
      "v2-md": "var(--radius-md)",
      "v2-lg": "var(--radius-lg)",
      "v2-full": "var(--radius-full)",
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-fira-code)", "Fira Code", "ui-monospace", "monospace"],
        // Portfolio v2
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        // Previous site (values scoped to .legacy)
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
        "input-bg": "var(--color-input-bg)",
        // Portfolio v2
        page:         "var(--colour-bg)",
        surface:      "var(--colour-surface)",
        ink:          "var(--colour-ink)",
        grey:         "var(--colour-grey)",
        hairline:     "var(--colour-hairline)",
        "stage-from": "var(--colour-stage-from)",
        "stage-to":   "var(--colour-stage-to)",
      },
      maxWidth: {
        container: "1282px",
        // Portfolio v2
        page:    "var(--layout-page)",
        column:  "var(--layout-column)",
        content: "var(--layout-content)",
      },
      width: {
        sidenav: "var(--layout-sidenav)",
      },
      spacing: {
        section:      "64px",
        "item-gap":   "32px",
        gutter:       "64px",
        "gutter-sm":  "24px",
        // Portfolio v2
        s4:   "var(--space-4)",
        s8:   "var(--space-8)",
        s12:  "var(--space-12)",
        s16:  "var(--space-16)",
        s24:  "var(--space-24)",
        s32:  "var(--space-32)",
        s48:  "var(--space-48)",
        s64:  "var(--space-64)",
        s96:  "var(--space-96)",
        s160: "var(--space-160)",
      },
      borderWidth: {
        hairline: "var(--stroke-hairline)",
      },
      aspectRatio: {
        media: "16 / 10",
      },
      dropShadow: {
        product: "0 8px 24px rgba(0, 0, 0, 0.6)",
      },
      fontSize: {
        // Desktop sizes — use with md: prefix on mobile-first approach
        display:        ["6rem",      { lineHeight: "1.2", fontWeight: "700" }],
        h2:             ["2rem",      { lineHeight: "1.2", fontWeight: "600" }],
        subheading:     ["1.5rem",    { lineHeight: "1.3", fontWeight: "500" }],
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
