import type { Metadata } from "next";
import { Suez_One } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const suezOne = Suez_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-suezOne",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptSans",
});

export const metadata: Metadata = {
  title: "reway",
  description: "Adventure is just around the corner!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-ptSans antialiased", ptSans.variable, suezOne.variable)}>{children}</body>
    </html>
  );
}
