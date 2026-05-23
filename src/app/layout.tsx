import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shera Travels – Kashmir's Trusted Travel Company",
  description: "Book Kashmir tours, Ladakh packages, honeymoon trips, and pilgrimage tours. Expert travel services with 10+ years experience.",
  icons: {
    icon: "/sheralogo.png",
    shortcut: "/sheralogo.png",
    apple: "/sheralogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-16 lg:pb-0`}>
        {children}
        <WhatsAppButton />
        <MobileBottomNav />
      </body>
    </html>
  );
}
