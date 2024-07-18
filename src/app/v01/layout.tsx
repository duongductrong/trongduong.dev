import NextThemeProvider from "@/components/next-theme-provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Gelatrial } from "@/fonts/gelatrial";

import { cn } from "@/lib/utils/tailwind";

import "./globals.scss";

export const metadata = {
  title: "Trong Duong",
  description: "Generated by Trong Duong",
  keywords: "Trong Duong | Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          Gelatrial.variable,
          "font-geist-sans"
        )}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
