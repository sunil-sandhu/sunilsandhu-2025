import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PersonJsonLd } from "@/components/JsonLd";
import { SITE_URL, profile } from "@/app/lib/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sunil Sandhu — Founder, Entrepreneur & Builder",
    template: "%s · Sunil Sandhu",
  },
  description: profile.shortBio,
  keywords: [
    "Sunil Sandhu",
    "In Plain English",
    "Obsurfable",
    "Differ",
    "Circuit",
    "Stackademic",
    "Messy Founder",
    "developer marketing",
    "developer communities",
    "founder",
    "entrepreneur",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sunil Sandhu",
    title: "Sunil Sandhu — Founder, Entrepreneur & Builder",
    description: profile.shortBio,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil Sandhu — Founder, Entrepreneur & Builder",
    description: profile.oneLiner,
    creator: "@sunilsandhu",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PersonJsonLd />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
