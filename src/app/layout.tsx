import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { config } from "@/data/config"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const brandTitle = `${config.brand.name} — Productos. Diseños que garpan.`
const brandDescription =
  "Remeras con diseños únicos y humor para comunidades. Productos, producción propia, identidad real."

export const metadata: Metadata = {
  title: brandTitle,
  description: brandDescription,
  keywords: [
    "remeras",
    "estampadas",
    "diseños",
    "developers",
    "argentina",
    "productos",
    config.brand.name.toLowerCase(),
  ],
  authors: [{ name: config.brand.name }],
  creator: config.brand.name,
  metadataBase: new URL(config.brand.siteUrl),
  openGraph: {
    title: brandTitle,
    description: brandDescription,
    url: config.brand.siteUrl,
    siteName: config.brand.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: brandTitle,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brandTitle,
    description: brandDescription,
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
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <GoogleAnalytics gaId="G-0XY9DXNLBQ" />
      </body>
    </html>
  )
}