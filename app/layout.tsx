import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nordicClub = localFont({
  src: "./fonts/NordicClub.otf",
  variable: "--font-nordic-club",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NOLL2 SOLUTIONS",
  description: "NOLL2 SOLUTIONS AB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nordicClub.variable} antialiased bg-orange-500/60 h-screen`}
      >
        <div className="fixed w-full flex justify-center pt-4">
          <span className={cn(nordicClub.className, "text-5xl text-amber-600")}>NOLL2</span>
        </div>
        {children}
      </body>
    </html>
  );
}
