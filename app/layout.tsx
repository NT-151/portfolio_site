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
  title: "AETHEREAL | AI Automation Agency",
  description:
    "AETHEREAL architects custom AI automation solutions for modern business operations.",
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
