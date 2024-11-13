"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/constants";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

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
              Meyiwa&apos;s Portfolio
            </motion.div>

            {/* Centered Navigation Links */}
            <div className="flex items-center gap-6">
              {/* Navigation Items */}
              <div className="flex space-x-4">
                {SECTIONS.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-lg cursor-pointer transition-all duration-200 
                               hover:text-primary hover:bg-gray-100 
                               dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 
                               px-2 py-1 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>

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
