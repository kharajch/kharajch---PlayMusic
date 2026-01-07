import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";
import Playbar from "@/components/Playbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "kharajch--PlayMusic",
  description: "Music Player Created -- By Kharaj Chakraborty (kharajch)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidenav />
        {children}
        <Playbar />
      </body>
    </html>
  );
}
