import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { getServices } from "@/services/httpServices";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaApply",
  description: "Study Abroad Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuResponse = await getServices("/menus");
  const menus = menuResponse?.data?.data;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header menus={menus}/>
        {children} 
      </body>
    </html>
  );
}
