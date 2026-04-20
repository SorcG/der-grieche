import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ancientGeek = localFont({
  src: "./fonts/ancient-geek.ttf",
  variable: "--font-display",
  display: "swap",
  fallback: ["Bebas Neue", "Impact", "sans-serif"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-fallback",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Der Grieche – Kattenstrother Grillhaus",
  description:
    "Authentisch griechisch seit 1974. Herzlich willkommen in Gütersloh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${ancientGeek.variable} ${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
