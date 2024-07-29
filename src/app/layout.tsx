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
import CustomBreadcrumbs from "@/components/custom-reusable/CustomBreadcrumbs";
import Footer from "@/components/custom-reusable/footer/Footer";
import MailListPrompt from "@/components/custom-reusable/header/desktop/side-nav/MailListPrompt";
import SideBanner from "@/components/custom-reusable/header/desktop/side-nav/SideBanner";
import { Suspense } from "react";

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
      <body className={cn("min-h-screen w-screen bg-background font-ptSans antialiased text-rewayBlack", ptSans.variable, suezOne.variable)}>
        <Suspense fallback={"Loading"}>
          <section className="w-full flex flex-col gap-8 overflow-hidden relative">
            <Header />

            <div className="flex gap-2 flex-1 overflow-x-hidden overflow-y-auto">
              <SideNav />

              <div className="min-h-full flex-1 flex flex-col px-4 lg:px-8 gap-8">
                <TopBanner />
                <Card className="border-none p-0 flex flex-col gap-4">
                  <CardHeader className="z-20 p-0 w-full">
                    <CustomBreadcrumbs />
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto p-0 pb-8 lg:pb-4">{children}</CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:hidden px-2 pb-2 space-y-8 mx-auto">
              <SideBanner />
              <MailListPrompt />
            </div>
            <Footer />
          </section>

          <Toaster position="top-center" richColors />
        </Suspense>
      </body>
    </html>
  );
}
