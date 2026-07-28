
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const brand =
    personalInfo.displayName ||
    personalInfo.firstName ||
    personalInfo.name ||
    "Portfolio";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">

            <motion.h1
              className="text-5xl md:text-7xl font-black text-white tracking-wider"
              initial="hidden"
              animate="visible"
            >
              {brand.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.05,
                        duration: 0.4,
                      },
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="text-red-500">.</span>
            </motion.h1>

            <motion.div
              className="mt-10 h-1 w-56 mx-auto rounded-full bg-white/10 overflow-hidden"
            >
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="mt-6 text-white/50 tracking-[6px] uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Loading Portfolio...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
