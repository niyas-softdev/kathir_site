import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kathir Constructions | Industrial & Commercial Construction",
  description: "Dreams Built To Last. Premier construction company specializing in industrial, pharma, and residential projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "antialiased min-h-screen flex flex-col")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
