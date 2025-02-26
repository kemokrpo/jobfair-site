{/*import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";*/}
import './globals.css';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Jobfair Mostar',
  description: 'Where Ambitions Meet Opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*<header className="bg-blue-500 text-white p-4">
          <h1>Jobfair Mostarr</h1>
        </header>*/}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
