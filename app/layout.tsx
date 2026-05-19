import type { Metadata } from "next";
import "./styles/site.css";

export const metadata: Metadata = {
  title: "Coverl — cinematic web design and AI automation",
  description:
    "Coverl is a studio for cinematic web design and quiet AI automation.",
};

// Inlined floor so the page degrades gracefully if the main stylesheet
// 404s (stale dev hash, slow CDN). Without this, BgVideo renders at
// intrinsic size and links fall back to blue-underlined defaults.
const criticalCss = `
html,body{margin:0;padding:0;background:#0b0806;color:#f0e4d3;font-family:"Iowan Old Style","Palatino Linotype","Book Antiqua","URW Palladio L",serif;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
*{box-sizing:border-box}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body
        style={{
          fontFamily:
            '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "URW Palladio L", serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
