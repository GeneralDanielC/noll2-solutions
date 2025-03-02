import type { Metadata, Viewport } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOLL2 SOLUTIONS",
  description: "NOLL2 SOLUTIONS specializes in web and app development, delivering custom digital solutions. We also offer professional accounting services to support your business growth.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={`${victorMono.className} antialiased bg-black h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
