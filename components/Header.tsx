"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/constants";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Set dark mode based on system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll function
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const updateActiveSectionOnScroll = () => {
      const sections = SECTIONS.map((section) =>
        document.getElementById(section.toLowerCase())
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", updateActiveSectionOnScroll);
    updateActiveSectionOnScroll(); // Initial check on load

    return () =>
      window.removeEventListener("scroll", updateActiveSectionOnScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
            >
              Meyiwa's Portfolio
            </motion.div>

            {/* Centered Navigation Tabs */}
            <div className="flex items-center gap-4">
              <Tabs defaultValue="home" className="hidden md:block">
                <TabsList className="bg-transparent flex justify-center">
                  {SECTIONS.map((item) => (
                    <TabsTrigger
                      key={item}
                      value={item.toLowerCase()}
                      className={`text-lg cursor-pointer transition-colors duration-200 hover:text-primary text-gray-700 dark:text-gray-300 ${
                        activeSection === item.toLowerCase()
                          ? "text-primary"
                          : ""
                      }`}
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Dark Mode Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="ml-4"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer below header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
