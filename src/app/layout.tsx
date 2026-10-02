import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roadmap IFMG | Trilhas de Carreira",
  description: "Trilhas de Carreira e Habilidades para alunos do IFMG",
  openGraph: {
    title: "Roadmap IFMG",
    description:
      "Planeje sua carreira visualmente! Um mapa interativo das disciplinas e trilhas profissionais para alunos do IFMG.",
    url: "https://roadmap-ifmg.vercel.app/",
    siteName: "Roadmap IFMG",
    images: [
      {
        url: "/assets/onboarding.png",
        width: 1200,
        height: 630,
        alt: "Roadmap IFMG - Mapa Interativo de Habilidades",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap IFMG",
    description: "Trilhas de Carreira e Habilidades para alunos do IFMG",
    images: ["/assets/onboarding.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
