import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans  } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import { getServices } from "@/services/httpServices";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";


const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
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
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          <Header menus={menus}/>
          {children} 
        </ThemeProviderWrapper>
          
        
      </body>
    </html>
  );
}
