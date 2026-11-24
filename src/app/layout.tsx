import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohan Veraitch | Product Design",
  description:
    "Product designer based in London. UX/UI Designer, Design Engineer, Product Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
