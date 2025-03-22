"use client";

import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocalization } from "../contexts/LocalizationContext";
import { T } from "./T";

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { language, setLanguage } = useLocalization();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <header
      className={`py-3 sm:py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#101010]/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-[5%] max-w-[1200px] mx-auto w-full">
        <div className="flex items-center py-2 sm:py-0">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
              alt="Neurart Logo"
              width={36}
              height={12}
              className="object-contain"
              priority
            />
            <span className="ml-2 sm:ml-3 text-white text-base sm:text-lg">
              Neurart.io
            </span>
            <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">
              Beta
            </span>
          </Link>
        </div>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-sm sm:text-[15px] text-white font-bold px-2 py-1 rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
          <Link
            href="/registro"
            className="text-sm sm:text-[15px] bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white active:bg-gray-300 relative z-50"
          >
            <T id="register" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
