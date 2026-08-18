import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const serifFont = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Domain Name | International Journal of Global Affairs",
  description: "A sophisticated, minimalist international publication offering independent journalism, deep-sea research, market insights, and cultural analysis.",
  keywords: ["news", "journalism", "world news", "business", "technology", "editorial"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1 w-full bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
