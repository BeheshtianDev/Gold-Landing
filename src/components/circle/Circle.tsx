"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Circle = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!circleRef.current) return;
    const el = circleRef.current;

    // Expand on entering the section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top+=300px bottom", // when section enters
          end: "center center",
          scrub: 2,
        },
      })
      .to(el, {
        width: "100vw",
        height: "100vw",
        borderRadius: "50%",
        scale: 1.5,
      })
      .to(el, {
        height: "500vh",
        borderRadius: "0",
      });

    // Shrink back on leaving the section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el.parentElement,
          start: "center top", // when bottom hits center
          end: "bottom top", // leaving viewport
          scrub: 1,
        },
      })
      .to(el, {
        width: "100vw",
        height: "100vw",
        borderRadius: "100%",
      })
      .to(el, {
        width: "100vw",
        height: "100vw",
        borderRadius: "100%",
        scale: 2,
      });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full h-[500vh] flex justify-center items-start overflow-hidden relative text-white">
      <div className="w-full h-full flex justify-center items-center absolute z-50">
        qfwqfewqf
      </div>

      <div
        ref={circleRef}
        className="w-2 h-2 rounded-full bg-[#111111] mt-80 flex justify-center items-center absolute"
      >
        <div className="w-2 h-2 bg-red-500"></div>
      </div>
    </div>
  );
};

export default Circle;
