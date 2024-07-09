import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/app/(main)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "사이버루나 - 이병호",
  description: "정보보안 및 개발 분야 활동",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "h-full bg-gradient-to-bl from-black to-purple-950",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}