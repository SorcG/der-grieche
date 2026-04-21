import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

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
  title: "Der Grieche - Kattenstrother Grillhaus",
  description: "Authentische griechische Taverne in Guetersloh. Seit 1974.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${ancientGeek.variable} ${bebasNeue.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
