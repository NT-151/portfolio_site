import type { Metadata } from "next";
import "./styles/tokens.css";
import "./styles/site.css";

export const metadata: Metadata = {
  title: "coverl — independent design studio",
  description: "An independent design studio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
