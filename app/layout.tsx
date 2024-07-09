import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nanum_Gothic_Coding } from "next/font/google";

const inter = Nanum_Gothic_Coding({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이버루나 - 이병호",
  description: "정보보안전문가/프로그래머",
  openGraph: {
    images: "https://www.cyber-luna.com/first.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full")}>{children}</body>
    </html>
  );
}