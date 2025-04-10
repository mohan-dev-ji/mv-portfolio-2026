import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'custom': '16px',
      },
      borderWidth: {
        'custom': '2px',   // Example custom width
      },
      colors: {
        light: {
          background: "#ECECEC",
          card: "#F7F7F7",
          hover: "#D8D8D8",
          secondary: "#081512",
          primary: "#0A2020",
          accent: "#398977",
          turquoise: "#74A49C",
        },
        // light: {
        //   background: "#CCCCCC",
        //   card: "#B8B8B8",
        //   hover: "#9E9E9E",
        //   secondary: "#081512",
        //   primary: "#0A2020",
        //   accent: "#398977",
        //   turquoise: "#74A49C",
        // },
        dark: {
          background: "#0D0D0D",
          card: "#191919",
          hover: "#343434",
          secondary: "#C1C1C1",
          primary: "#FDFDFD",
          accent: "#33DE88",
          turquoise: "#74A49C",
        },
        
      },
      fontSize: {
        "caption-s": ["48px", { lineHeight: "120%", fontWeight: "700"}],
        "h1-bold": ["40px", { lineHeight: "120%", fontWeight: "700"}],
        "h1": ["40px", { lineHeight: "120%", fontWeight: "500"}],
        "h2-bold": ["32px", { lineHeight: "130%",fontWeight: "700"}],
        "h2": ["32px", { lineHeight: "130%", fontWeight: "300"}],
        "h3-bold": ["24px", { lineHeight: "140%", fontWeight: "600"}],
        "h3": ["24px", { lineHeight: "140%", fontWeight: "300"}],
        "p-bold": ["16px", { lineHeight: "150%", fontWeight: "700"}],
        "p": ["16px", { lineHeight: "150%", fontWeight: "300"}],
        "s-bold": ["12px", { lineHeight: "170%", fontWeight: "600"}],
        "s": ["12px", { lineHeight: "170%", fontWeight: "300"}],
      },
      utilities: {
        '.overflow-fix': {
          '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config;
