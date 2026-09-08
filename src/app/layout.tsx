import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE AURA | Lake Como, Italy",
  description: "An intimate escape shaped by exceptional design, thoughtful hospitality, and unforgettable experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-brand-ivory text-brand-charcoal dark:bg-brand-charcoal dark:text-brand-ivory min-h-screen flex flex-col font-sans selection:bg-brand-gold selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
