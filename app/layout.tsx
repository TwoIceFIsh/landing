import type { Metadata } from "next";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Plausible from "plausible-tracker";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plausible = Plausible({
  domain: "cyber-luna.com",
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
  plausible.enableAutoPageviews();
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full min-h-screen w-full font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}