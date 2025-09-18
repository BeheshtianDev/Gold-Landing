"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const el = circleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top+=100 bottom",
        end: "center center",
        scrub: 2, // adds smooth catch-up effect
        toggleActions: "play reverse play reverse",
      },
    });

    // Stage 1: expand into a full circle
    tl.to(el, {
      scaleX: "100%",
      scaleY: "100%",
      width: "100vw",
      height: "100vw",
      borderRadius: "50%",
    });

    // Stage 2: flatten bottom corners
    tl.to(el, {
      scaleX: "130%",
      scaleY: "130%",
      borderBottomLeftRadius: "0%",
      borderBottomRightRadius: "0%",
      ease: "power2.inOut", // smooth curve
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div ref={circleRef} className="bg-[#111111] w-full h-full"></div>
    </div>
  );
};

export default Faq;
