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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top+=200px bottom",
        end: "center center",
        scrub: 1, // adds smooth catch-up effect
        toggleActions: "play reverse play reverse",
      },
    });

    // Stage 1: expand into a full circle
    tl.to(el, {
      width: "100vw",
      height: "100vw",
      borderRadius: "50%",
    });

    // Stage 2: flatten bottom corners
    tl.to(el, {
      borderRadius: "0%",
      ease: "power2.inOut", // smooth curve
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full h-[200vh] flex justify-center items-start overflow-hidden relative bg-transparent">
      <div ref={circleRef} className="w-5 h-5 rounded-full bg-[#111111]"></div>
    </div>
  );
};

export default Circle;
