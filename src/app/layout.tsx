import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
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
