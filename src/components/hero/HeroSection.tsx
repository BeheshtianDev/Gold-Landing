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
    <div className="w-full h-auto  flex flex-col justify-start items-start ">
      <div className="flex lg:w-[32vw] w-[75vw] overflow-hidden items-end  absolute lg:top-[3vw] top-[50vw] lg:right-[55vw] right-[20vw] group">
        <div className="absolute  w-2/3 h-1/3  bg-gradient-to-t z-10 from-[#f8f8f8] to-transparent"></div>
        <img src="/hand.png" alt="" className="mix-blend-darken mr-1" />
      </div>
      {/* Right vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute right-[10vw] lg:inline hidden"
        animate={{ height: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Left vertical line */}
      <motion.span
        className="w-px h-full bg-[#111111]/20 absolute left-[10vw] lg:inline hidden"
        animate={{ height: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      {/* Top horizontal line */}
      <motion.span
        className="w-full h-px bg-[#111111]/20 absolute top-[5vw] lg:inline hidden"
        animate={{ width: scrolled ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-col  lg:mr-[20vw] mr-[11vw] lg:mt-[12vw] mt-[20vw] gap-2 text-nowrap ">
        <h1 className="xl:text-[3vw]  lg:text-[4vw] md:text-[5vw] text-[#111111] text-[7vw] font-semibold">
          زیبایی جاودانه در دستان شما
        </h1>
        <span className="xl:text-[1.5vw] lg:text-[2vw] md:text-[2.5vw] font-light text-[#111111]/50 text-[3.5vw]">
          کلکسیونی از طلاهای دست‌ساز و مدرن
        </span>
        <div className="flex justify-start gap-3 items-center lg:mt-7 mt-10">
          <button className="lg:w-40 w-28 lg:h-12 h-10 bg-[#111111] group hover:text-[#111111] rounded-full  shadow-lg  shadow-black/40 border border-[#111111] hover:border-[#111111]/20 hover:bg-[#f8f8f8]  cursor-pointer transition-all duration-300 overflow-hidden flex gap-6 flex-col lg:text-base text-xs justify-start pt-2.5 delay-100 items-center">
            <p className="group-hover:-translate-y-12 delay-100 transition-all duration-300">
              سفارش اختصاصی
            </p>
            <p className="group-hover:-translate-y-12 delay-100 transition-all duration-300">
              سفارش اختصاصی
            </p>
          </button>
          <div className="relative w-4 h-4 mr-2">
            <span className="absolute inline-flex h-full w-full justify-center items-center rounded-full bg-[#FFD700] opacity-80">
              <span className=" rounded-full h-3.5 w-3.5 bg-[#FFD700]  animate-ping"></span>
              <span className="absolute rounded-full h-1.5 w-1.5 bg-[#ca9510]  "></span>
            </span>
          </div>
          <span className="text-[#111111]/60 font-light">
            این انتخاب، تکرار نمیشه
          </span>
        </div>
      </div>
      <StatsCard />
    </div>
  );
};

export default HeroSection;
