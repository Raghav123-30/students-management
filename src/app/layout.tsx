import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navigation/Navbar";

import AppWrapper from "@/components/Security/AppWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Management",
  description: "App to demonstrate Next 14's new App router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <AppWrapper>
            <Navbar />

            {children}
            <Footer />
          </AppWrapper>
        </div>
      </body>
    </html>
  );
}
