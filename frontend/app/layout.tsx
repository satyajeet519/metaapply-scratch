import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans  } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { getServices } from "@/services/httpServices";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Open_Sans({
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
