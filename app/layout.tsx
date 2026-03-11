import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eudaimon Consulting | Strategic Advisory for the Digital Age",
  description:
    "Boutique strategic advisory firm specialising in digital transformation, AI strategy, M&A, and corporate strategy for financial services companies.",
  keywords:
    "consulting, digital transformation, AI strategy, financial services, M&A, insurance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
