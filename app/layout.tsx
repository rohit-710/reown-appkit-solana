import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added

export const metadata: Metadata = {
  title: "AppKit Example App",
  description: "Powered by Reown"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // You can now access cookies using headers()
  const cookies = headers().get('cookie');

  return (
    <html lang="en">
      <body className={inter.className}>
        {children} {/* Ensure that children are rendered */}
      </body>
    </html>
  );
}
