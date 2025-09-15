"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
};

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
}) => {
  const [display, setDisplay] = useState(from.toString());

  useEffect(() => {
    let startTime: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / (duration * 1000), 1);
      const eased = easeOutCubic(t);

      const value = from + (to - from) * eased;
      setDisplay(Math.floor(value).toString());

      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <motion.span className="inline-block">
      {display}
      {suffix}
    </motion.span>
  );
};

const StatsCard = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-[65vw] h-[20vw] py-[5vw] grid z-20 grid-cols-6  relative mr-[17.5vw] gap-2 mt-[19vh] text-[#111111]/90 overflow-hidden">
      {/* 500+ */}
      <motion.div
        className="col-span-2 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl text-[2.5vw] p-5 flex flex-col gap-5"
        animate={{ y: scrolled ? "-25vh" : "0vh" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Counter to={500} suffix="+" />
        <span className="text-[1vw] font-light">مشتری خوشحال و وفادار</span>
      </motion.div>

      {/* ۹۸٪ */}
      <motion.div
        className="col-span-1 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl text-[2.5vw] p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-25vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      >
        <Counter to={98} suffix="٪" />
        <span className="text-[1vw] font-light">
          رضایت <br /> از کیفیت و خدمات
        </span>
      </motion.div>

      {/* ۲۰۰۰+ */}
      <motion.div
        className="col-span-2 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl text-[2.5vw] p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-25vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
      >
        <Counter to={2000} suffix="+" />
        <span className="text-[1vw] font-light">زیور دست‌ساز منحصربه‌فرد</span>
      </motion.div>

      {/* ۲۵+ */}
      <motion.div
        className="col-span-1 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl text-[2.5vw] p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-25vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
      >
        <Counter to={25} suffix="+" />
        <span className="text-[1vw] font-light">
          ارسال به <br />
          شهر سرار ایران
        </span>
      </motion.div>
    </div>
  );
};

export default StatsCard;
