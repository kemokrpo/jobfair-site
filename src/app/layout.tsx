{/*import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";*/}
import './globals.css';
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Jobfair Mostar',
  description: 'Where Ambitions Meet Opportunities',
  icons: {
    icon: "/jobfair-logo-colored.jpg"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Manually set the favicon */}
        <link rel="icon" type="image/x-icon" href="/jobfair-logo-colored.jpg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
