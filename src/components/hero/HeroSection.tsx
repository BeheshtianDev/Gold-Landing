"use client";
import StatsCard from "./StatsCard";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-screen  flex flex-col justify-start items-start ">
      <div className="flex w-[740px] overflow-hidden items-end  absolute bottom-0 right-3/6 group">
        <div className="absolute  w-full h-1/3  bg-gradient-to-t z-10 from-[#f8f8f8] to-transparent"></div>
        <img src="/hand.avif" alt="" className="mix-blend-darken " />
      </div>
      {/* Right vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute right-[10vw]"
        animate={{ height: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Left vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute left-[10vw]"
        animate={{ height: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      {/* Top horizontal line */}
      <motion.span
        className="w-full h-px bg-[#111111]/20 absolute top-[5vw]"
        animate={{ width: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-col  mr-[20vw] mt-[12vw] gap-2 text-nowrap ">
        <h1 className="xl:text-[3vw]  lg:text-[4vw] md:text-[5vw] text-[#111111] text-[7vw] font-semibold">
          زیبایی جاودانه در دستان شما
        </h1>
        <span className="xl:text-[1.5vw] lg:text-[2vw] md:text-[2.5vw] font-light text-[#111111]/50 text-[3.5vw]">
          کلکسیونی از طلاهای دست‌ساز و مدرن
        </span>
        <button className="w-40 h-12 bg-[#111111] group hover:text-[#111111] rounded-full mt-7 shadow-lg  shadow-black/40 border border-[#111111] hover:border-[#111111]/20 hover:bg-[#f8f8f8]  cursor-pointer transition-all duration-300 overflow-hidden flex gap-6 flex-col justify-start pt-2.5 delay-100 items-center">
          <p className="group-hover:-translate-y-12 delay-100 transition-all duration-300">
            سفارش اختصاصی
          </p>
          <p className="group-hover:-translate-y-12 delay-100 transition-all duration-300">
            سفارش اختصاصی
          </p>
        </button>
      </div>
      <StatsCard />
    </div>
  );
};

export default HeroSection;
