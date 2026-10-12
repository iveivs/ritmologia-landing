// token-check:allow-file color (the browser UI colour in `viewport` must be a literal)
import type { Metadata, Viewport } from "next";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";

// Two families, three weights in total: 400 (text), 600 (labels, UI),
// 800 (display headings). Do not add weights without updating --fw-* tokens.
const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["cyrillic", "latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ритмология — уроки барабанов в Санкт-Петербурге и онлайн",
  description:
    "Уроки барабанов в Санкт-Петербурге и онлайн: играем любимые песни, развиваем чувство ритма и ставим технику. Индивидуально, первый урок бесплатно.",
};

// Browser chrome (address bar) follows the system theme.
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4eae2" },
    { media: "(prefers-color-scheme: dark)", color: "#17120f" },
  ],
};

// Runs before first paint: applies a saved light/dark choice so a dark-theme
// visitor never sees a light flash. "Auto" needs no attribute (CSS follows
// the system by itself).
const themeInit = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${golos.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
