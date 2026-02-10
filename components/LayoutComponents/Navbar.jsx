"use client";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io"; // 👈 Cross icon

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  // Detect scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Auto close menu if scrolled back to top in desktop
      if (window.scrollY === 0 && window.innerWidth >= 768) {
        setMenuOpen(false);
      }

      // Detect active section
      const sections = ["home", "about", "skills", "experience", "works", "contact"];
      const scrollPosition = window.scrollY + 100;

      let currentSection = "home";
      
      // Check each section to find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Check if the scroll position is within this section's bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sections[i];
            break;
          }
          // If we're at the very top, default to home
          else if (scrollPosition < 50) {
            currentSection = "home";
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
      console.log('Active section:', currentSection, 'Scroll position:', scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigations = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Skills", value: "skills" },
    { name: "Experience", value: "experience" },
    { name: "Works", value: "works" },
    { name: "Contact", value: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
        className="w-screen mx-auto fixed top-1 md:top-2 px-1 md:px-2 lg:px-6 z-20"
      >
        {/* NAV CONTAINER */}
        <motion.div
          animate={{
            width: isScrolled
              ? window.innerWidth >= 768
                ? "230px"
                : "95%"
              : "95%",
          }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`${
            isScrolled ? "ml-auto mr-2 md:ml-auto md:mr-2" : "mx-auto"
          } h-[7vh] md:h-[9vh] max-h-[70px] rounded-md md:rounded-2xl px-6 bg-gradient-to-bl from-primary/50 to-[#252525]/50
          backdrop-blur-sm drop-shadow-sm flex items-center justify-between
          fixed left-0 right-0 md:relative`}
        >
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3 cursor-pointer">
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.h1 
                  key="scrolledText" 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl font-semibold text-white"
                >
                  Ramandeep Singh
                </motion.h1>
              ) : (
                <motion.div 
                  key="logoContainer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  {/* Show Sudip Ghara text on both mobile and desktop when not scrolled */}
                  <h1 className="text-lg md:text-xl font-semibold text-white">
                    Ramandeep Singh
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* NAVIGATION / MENU */}
          <div className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={isScrolled ? "menuIcon" : "navLinks"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center"
              >
                {/* Desktop links */}
                {!isScrolled ? (
                  <div className="hidden md:flex gap-x-7">
                    {navigations.map((item, i) => (
                      <h3
                        key={i}
                        onClick={() => scrollToSection(item.value)}
                        className={`uppercase text-sm font-light tracking-wide cursor-pointer transition ${
                          activeSection === item.value
                            ? "text-white"
                            : "text-[#d0d0d0] hover:text-white"
                        }`}
                      >
                        {item.name}
                      </h3>
                    ))}
                  </div>
                ) : null}

                {/* Menu / Close Icon */}
                <div
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={`cursor-pointer text-3xl text-white ${
                    !isScrolled ? "md:hidden" : "block"
                  }`}
                >
                  {menuOpen ? <IoMdClose /> : <HiMenuAlt3 />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.nav>

      {/* ---------- MENU DRAWER ---------- */}
<AnimatePresence>
  {menuOpen && (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-10"
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-[9vh] md:top-[11vh] right-2 md:right-4 h-[calc(96vh-7vh-8px)] md:h-[calc(95vh-9vh-8px)] w-[80vw] md:w-[60vw] rounded-2xl bg-primary/35 backdrop-blur-md z-20 p-6 md:p-12 flex flex-col gap-6"
      >
        {navigations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            onClick={() => scrollToSection(item.value)}
            className="relative cursor-pointer"
          >
            <h3 className={`uppercase text-4xl md:text-5xl font-semibold tracking-wide transition ${
              activeSection === item.value
                ? "text-primary"
                : "text-white hover:text-primary"
            }`}>
              {item.name}
            </h3>

            {/* Underline Animation */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5, ease: "easeOut" }}
              className={`absolute left-0 bottom-0 h-[1.5px] w-full origin-left rounded-full ${
                activeSection === item.value
                  ? "bg-primary"
                  : "bg-white/50"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
};
