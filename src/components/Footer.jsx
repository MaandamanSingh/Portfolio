
import React from "react";
import { motion } from "framer-motion";
import { footerContent, personalInfo, socialLinks } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div>
            <h2 className="text-3xl font-black text-white">
              {personalInfo.firstName}
              <span className="text-red-500">.</span>
            </h2>

            <p className="mt-3 text-white/60 max-w-md">
              {footerContent.description}
            </p>
          </div>

          <div className="flex gap-4">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-500 transition text-white">
              LinkedIn
            </a>

            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer"
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-500 transition text-white">
              WhatsApp
            </a>

            <a href={`mailto:${socialLinks.email}`}
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-500 transition text-white">
              Email
            </a>
          </div>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {year} {personalInfo.displayName || personalInfo.firstName}. All rights reserved.
          </p>

          <a
            href="#home"
            className="rounded-full bg-red-500 px-5 py-3 text-white font-semibold hover:bg-red-600 transition"
          >
            ↑ Back to Top
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
