import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectSync",
  description: "Projektmanagement für Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          inter.className,
          "grainy flex min-h-screen flex-col font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
