import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./styles/site.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Allinhaus | AI Automation for Beauty Clinics",
  description:
    "AI automation systems for beauty clinics, including unified inboxes, LLM reply drafts, treatment note summaries, Pabau-ready exports, and invoice workflows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="light" lang="en">
      <body className={`${hankenGrotesk.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
