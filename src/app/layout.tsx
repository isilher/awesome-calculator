import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry";
import PrimeMatrixBackground from "../components/PrimeMatrixBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🧮 Awesome Calculator - Prime Number Badge Collection",
  description: "An advanced calculator featuring Material UI design, prime number detection, badge collection system, keyboard shortcuts, and beautiful matrix animations. Built with Next.js 15 and React 19.",
  keywords: ["calculator", "prime numbers", "mathematics", "Next.js", "React", "Material UI", "badge collection"],
  authors: [{ name: "Awesome Calculator Team" }],
  creator: "Claude Code",
  publisher: "Awesome Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://awesome-calculator.vercel.app'),
  openGraph: {
    title: "🧮 Awesome Calculator - Prime Number Badge Collection",
    description: "An advanced calculator with prime number detection and badge collection system",
    url: "https://awesome-calculator.vercel.app",
    siteName: "Awesome Calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Awesome Calculator with Prime Number Badges",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🧮 Awesome Calculator - Prime Number Badge Collection",
    description: "An advanced calculator with prime number detection and badge collection system",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <PrimeMatrixBackground />
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
