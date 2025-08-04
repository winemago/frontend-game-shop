import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/container/NavBar";
import Footer from "@/components/container/Footer";
const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className + " flex flex-col min-h-screen"}>
        <NavBar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
