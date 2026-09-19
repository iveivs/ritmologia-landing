import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Ритмология — школа барабанов в Санкт-Петербурге",
  description:
    "Развиваем чувство ритма, ставим технику и учим уверенно играть за барабанами. Бесплатный пробный урок в Санкт-Петербурге и онлайн.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${golos.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
