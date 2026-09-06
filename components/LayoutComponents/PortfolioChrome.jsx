"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/LayoutComponents/Navbar";
import { Footer } from "@/components/LayoutComponents/Footer";
import HomeTicTacToe from "@/components/HomeComponents/HomeTicTacToe";
import HomeMayhemEngine from "@/components/HomeComponents/HomeMayhemEngine";
import ParticleBackground from "@/components/Ui/ParticleBackground";
import ThemeSwitcher from "@/components/Ui/ThemeSwitcher";

export default function PortfolioChrome({ children }) {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/frameworks");

  if (isDocsPage) {
    return <>{children}</>;
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      {children}
      <Footer />
      <HomeTicTacToe />
      <HomeMayhemEngine />
      <ThemeSwitcher />
    </>
  );
}
