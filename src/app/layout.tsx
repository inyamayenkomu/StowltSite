import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Stowlt | Úložné prostory v Olomouci",
  description: "Uložte věci chytře. Bezpečně. Lokálně. Moderní a bezpečné úložné kóje přímo v Olomouci pro rodiny a domácnosti.",
  keywords: ["úložné prostory", "storage", "Olomouc", "sklep", "úložiště", "kóje"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
