import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Project LOGOS - Graph-Based Cognitive Architecture",
  description: "Open-source cognitive architecture for autonomous agents using graph-based reasoning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
