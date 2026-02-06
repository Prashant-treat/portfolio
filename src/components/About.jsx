import { motion, AnimatePresence } from "motion/react"
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // Fixed at top, blurring the background for that premium feel
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand - Minimalist Typography */}
        <a href="#" className="text-lg font-semibold tracking-tighter hover:opacity-70 transition-opacity">
          RAM<span className="text-gray-400">.</span>
        </a>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-8">
          {/* Desktop Links - Gray to Black/White on hover */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-gray-100 dark:border-gray-800 pl-6">
            <button 
              onClick={toggleTheme}
              className="text-lg grayscale hover:grayscale-0 transition-all active:scale-90"
            >
              {theme === "dark" ? "☼" : "☾"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className={`h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}