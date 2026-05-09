import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioChatbot from "@/components/PortfolioChatbot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soojal Kumar | Software Developer Portfolio",
  description:
    "Professional portfolio for Soojal Kumar, Computer Science graduate and software developer focused on AI, optimization, systems, cloud APIs, and cybersecurity-aware applications.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <PortfolioChatbot />
      </body>
    </html>
  );
}
