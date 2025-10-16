
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khaled Bakry - Front-End React/Next.js Developer",
  description:
    "Professional portfolio of Khaled Bakry, a skilled Front-End Developer specializing in React and Next.js. Building scalable, high-performance web applications.",
  keywords:
    "Khaled Bakry, Front-End Developer, React Developer, Next.js Developer, JavaScript, Web Development, Damascus, Syria",
  authors: [{ name: "Khaled Bakry" }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/apple-icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: "Khaled Bakry - Front-End React/Next.js Developer",
    description: "Professional portfolio showcasing React and Next.js projects",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 text-slate-200 transition-all duration-500`}
      >
        <div className={`fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23334155" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none`}></div>

        <ScrollProgress />
        <Header />
        <main className="pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
