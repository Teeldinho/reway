import type { Metadata } from "next";
import { Suez_One } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Header from "@/components/custom-reusable/header/Header";
import SideNav from "@/components/custom-reusable/header/desktop/side-nav/SideNav";
import TopBanner from "@/components/custom-reusable/header/TopBanner";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={cn("min-h-screen bg-background font-ptSans antialiased text-rewayBlack flex", ptSans.variable, suezOne.variable)}>
        <section className="flex flex-col gap-8 flex-1 overflow-hidden">
          <Header />

          <div className="flex gap-8 flex-1 pr-8">
            <SideNav />

            <div className="flex-1 flex flex-col gap-8">
              <TopBanner />
              <Card className="flex-1 border-2 border-muted">
                <CardHeader>Breadcrumbs</CardHeader>
                <CardContent className="flex-1 overflow-y-auto">{children}</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Toaster />
      </body>
    </html>
  );
}
