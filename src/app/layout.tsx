import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DM_Sans, DM_Serif_Display, DM_Serif_Text, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "500",
  subsets: ["latin"],
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
  title: "LOREN | Contemporary Outwear",
  description: "The Art of Timeless Outerwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dmSans.variable} ${dmSerifDisplay.variable} ${dmSerifText.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="flex min-h-full flex-col selection:bg-loren-black selection:text-loren-white">
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
