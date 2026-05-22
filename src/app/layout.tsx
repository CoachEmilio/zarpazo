import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Targattos — Drops limitados. Diseños que garpan.",
  description:
    "Remeras con diseños únicos y humor para comunidades. Drops limitados, producción propia, identidad real.",
  keywords: [
    "remeras",
    "estampadas",
    "diseños",
    "developers",
    "argentina",
    "drops limitados",
    "targattos",
  ],
  authors: [{ name: "Targattos" }],
  creator: "Targattos",
  metadataBase: new URL("https://targattos.vercel.app"),
  openGraph: {
    title: "Targattos — Drops limitados. Diseños que garpan.",
    description:
      "Remeras con diseños únicos y humor para comunidades. Drops limitados, producción propia, identidad real.",
    url: "https://targattos.vercel.app",
    siteName: "Targattos",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Targattos — Drops limitados. Diseños que garpan.",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Targattos — Drops limitados. Diseños que garpan.",
    description:
      "Remeras con diseños únicos y humor para comunidades. Drops limitados, producción propia, identidad real.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}