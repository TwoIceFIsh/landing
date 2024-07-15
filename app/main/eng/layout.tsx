import type { Metadata } from "next";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Nanum_Gothic_Coding } from "next/font/google";

const inter = Nanum_Gothic_Coding({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Luna - Aiden Lee",
  description: "Information Security Specialist/Programmer",
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