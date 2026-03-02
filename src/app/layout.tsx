import { Fira_Code } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "next-themes";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohan Veraitch | Design Engineer",
  description: "Design Engineer based in London. Design, Build & Deploy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={firaCode.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Background atmosphere — faint blurred lines */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
            <div className="absolute top-[25%] left-[5%] w-[55%] h-px bg-zinc-500 blur-[120px] opacity-20 dark:opacity-25" />
            <div className="absolute top-[70%] right-[8%] w-[40%] h-px bg-zinc-500 blur-[100px] opacity-10 dark:opacity-20" />
          </div>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
