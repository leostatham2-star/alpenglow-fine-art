import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alpenglow Fine Art | Mountain & Meadow Landscape Photography Prints",
  description:
    "Large format fine art landscape photography of the American mountain west by Elias Ward. Wildflower meadows, alpine lakes, and first light, hand printed on archival cotton paper in Ridgway, Colorado. Editions capped at 100.",
  keywords: [
    "fine art photography",
    "landscape photography prints",
    "mountain photography",
    "wildflower meadow prints",
    "large format art",
    "Colorado photographer",
  ],
  authors: [{ name: "Elias Ward" }],
  openGraph: {
    title: "Alpenglow Fine Art | Mountain & Meadow Landscape Photography",
    description:
      "Large format photographs of mountains, meadows, and first light across the American west. Hand printed archival editions of 100.",
    siteName: "Alpenglow Fine Art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased bg-[#f7f2e9] text-[#26211a]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
