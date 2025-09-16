"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Lock/unlock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="w-4 h-4 cursor-pointer m-5 rounded-full bg-[#111111] text-white"
      ></button>

      {/* Overlay + Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/20 flex justify-center items-center"
            onClick={() => setOpen(false)} // click outside closes
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="w-[60vw] h-[80vh] backdrop-blur-2xl overflow-hidden 
                         backdrop-brightness-[50%] flex justify-start border border-black/10 items-center 
 rounded-2xl relative z-50 shadow-xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <div className="w-1/4 h-full border-l border-white/20 bg-black/20"></div>

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 rounded-full bg-[#f8f8f8] w-4 h-4 cursor-pointer"
              ></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
