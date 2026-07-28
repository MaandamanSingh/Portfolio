import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigation, personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#home" className="text-white font-black text-2xl">
          {personalInfo.firstName}
          <span className="text-red-500">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-white/70 hover:text-white transition"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden lg:inline-flex rounded-full bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600 transition"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
              >
                {item.title}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="mt-2 rounded-full bg-red-500 px-5 py-3 text-center font-semibold text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
