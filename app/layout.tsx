// Root layout — global metadata + font preconnect + scroll progress bar
import type { Metadata } from "next";
import "./globals.css";

import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Siam Expat — Réussir son expatriation en Thaïlande",
  description:
    "La formation humaine et concrète pour s'installer sereinement à Bangkok : visas, fiscalité, famille, entreprise. Par Khanchai & Audrey, couple franco-thaï.",
  openGraph: {
    title: "Siam Expat — Réussir son expatriation en Thaïlande",
    description:
      "Formation complète pour bâtir une vie alignée sous le soleil de Bangkok.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ScrollProgress />
      </body>
    </html>
  );
}
