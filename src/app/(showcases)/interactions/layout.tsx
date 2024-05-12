import { BaseLayoutProps } from "@/types/next";

export const metadata = {
  title: "Trong Duong",
  description: "Generated by Trong Duong",
  keywords: "Trong Duong | Personal Portfolio",
};

export interface ShowcaseRootProps extends BaseLayoutProps {}

const ShowcaseRoot = ({ children }: ShowcaseRootProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default ShowcaseRoot;
