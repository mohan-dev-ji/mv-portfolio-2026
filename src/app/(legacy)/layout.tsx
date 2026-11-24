import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import "./legacy.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600"],
  display: "swap",
});

/* The previous site, kept unlinked until its pages are deleted. */
export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className={`legacy ${firaCode.variable}`}>
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
          <div className="absolute top-[-15%] left-[55%] w-[6px] h-[120vh] bg-primary blur-[130px] rotate-[30deg] opacity-100 dark:opacity-100" />
          <div className="absolute top-[50%] left-[5%] w-[90%] h-[6px] bg-primary blur-[100px] opacity-100 dark:opacity-100" />
          <div className="absolute top-[72%] right-[8%] w-[50%] h-[4px] bg-primary blur-[120px] opacity-100 dark:opacity-100" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
