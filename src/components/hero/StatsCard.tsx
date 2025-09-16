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
    if (window.innerWidth > 1024) {
      // 👈 فقط زیر lg
      setScrolled(window.scrollY > 50);
    } else {
      setScrolled(false); // وقتی بزرگتر از lg شد ریست کن
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <div className="lg:w-[65vw] w-[80vw] lg:h-[15vw] h-[55vw] lg:grid-rows-none grid-rows-2  py-[3vw] grid z-20 lg:grid-cols-6 grid-cols-3  relative lg:mr-[17.5vw] mr-[10vw] gap-2 lg:mt-[11vw] mt-[70vw] text-[#111111]/90 overflow-hidden">
      {/* 500+ */}
      <motion.div
        className="col-span-2 lg:row-start-1 row-start-2 col-start-2 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl lg:text-[2.5vw] text-[7vw]  p-[1vw] flex flex-col gap-5"
        animate={{ y: scrolled ? "-35vh" : "0vh" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Counter to={500} suffix="+" />
        <span className="lg:text-[1vw] text-[3vw] font-light">مشتری خوشحال و وفادار</span>
      </motion.div>

      {/* ۹۸٪ */}
      <motion.div
        className="col-span-1 lg:row-start-1 row-start-2  shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl lg:text-[2.5vw] text-[7vw]  p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-35vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      >
        <Counter to={98} suffix="٪" />
        <span className="lg:text-[1vw] text-[3vw] font-light">
          رضایت <br /> از کیفیت و خدمات
        </span>
      </motion.div>

      {/* ۲۰۰۰+ */}
      <motion.div
        className="col-span-2 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl lg:text-[2.5vw] text-[7vw]  p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-35vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
      >
        <Counter to={2000} suffix="+" />
        <span className="lg:text-[1vw] text-[3vw] font-light">زیور دست‌ساز منحصربه‌فرد</span>
      </motion.div>

      {/* ۲۵+ */}
      <motion.div
        className="col-span-1 shadow-lg backdrop-blur-lg border border-[#111111]/30 rounded-xl lg:text-[2.5vw] text-[7vw]  p-[1vw] flex flex-col gap-[1vw]"
        animate={{ y: scrolled ? "-35vh" : "0vh" }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
      >
        <Counter to={25} suffix="+" />
        <span className="lg:text-[1vw] text-[3vw] font-light">
          ارسال به <br />
          شهر سرار ایران
        </span>
      </motion.div>
    </div>
  );
};

export default StatsCard;
