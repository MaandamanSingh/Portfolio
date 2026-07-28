import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
const CaseStudyModal = ({ isOpen, onClose, children }) => {
    const scrollRef = useRef(null);

useEffect(() => {
  if (isOpen && scrollRef.current) {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [children, isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
          >
      <div
  ref={scrollRef}
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-6xl h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border border-white/10"
>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl"
              >
                ✕
              </button>

             <motion.div
  key={children?.type?.name}
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -60 }}
  transition={{
    duration: 0.45,
    ease: "easeInOut",
  }}
  className="p-10"
>
  {children}
</motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;