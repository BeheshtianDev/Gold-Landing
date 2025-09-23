"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom
      setAtBottom(scrollTop + windowHeight >= fullHeight - 5); // small buffer
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-screen w-full relative">
      {/* Right vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute right-[10vw] lg:inline hidden"
        animate={{ height: atBottom ? "100%" : "0%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Left vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute left-[10vw] lg:inline hidden"
        animate={{ height: atBottom ? "100%" : "0%" }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      {/* Top horizontal line */}
      <motion.span
        className="w-full h-px bg-[#111111]/20 absolute bottom-[5vw] lg:inline hidden"
        animate={{ width: atBottom ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Footer;
