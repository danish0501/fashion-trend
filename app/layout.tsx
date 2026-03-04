import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import BottomNavbar from "@/common/BottomNavbar";
import CategoryNavbar from "@/common/CategoryNavbar";
import Footer from "@/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fashion Trends",
  description: "The latest styles and upcoming trends in fashion.",
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
        <Navbar />
        <CategoryNavbar />
        <main className="pt-24 max-[426px]:pt-32 max-[426px]:pb-24 min-h-screen">
          {children}
        </main>
        <Footer />
        <BottomNavbar />
      </body>
    </html>
  );
}

