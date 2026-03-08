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
          {/* Background atmosphere — light beams */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
            {/* Diagonal hero beam — top-right to lower-left */}
            <div className="absolute top-[-15%] left-[55%] w-[6px] h-[120vh] bg-primary blur-[130px] rotate-[30deg] opacity-100 dark:opacity-100" />
            {/* Horizontal mid beam — wave / workflow zone */}
            <div className="absolute top-[50%] left-[5%] w-[90%] h-[6px] bg-primary blur-[100px] opacity-100 dark:opacity-100" />
            {/* Lower diagonal — stack / positioning zone */}
            <div className="absolute top-[72%] right-[8%] w-[50%] h-[4px] bg-primary blur-[120px] opacity-100 dark:opacity-100" />
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
