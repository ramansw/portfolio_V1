"use client";

import { Montserrat, League_Spartan } from "next/font/google";
import "./globals.css";
import useLenis from "@/hooks/useLenis";
import CustomCursor from "@/components/Ui/CustomCursor";
import PortfolioChrome from "@/components/LayoutComponents/PortfolioChrome";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export default function RootLayout({ children }) {
  useLenis();

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${leagueSpartan.variable} font-league text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <PortfolioChrome>{children}</PortfolioChrome>
      </body>
    </html>
  );
}
