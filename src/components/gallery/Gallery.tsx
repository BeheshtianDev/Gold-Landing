"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    gsap.to(el, {
      backgroundColor: "#111111",
      duration: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top bottom+=500px", // bg appears 200px after section enters
        end: "bottom-=500px bottom", // bg disappears 200px before leaving
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[200vh] bg-transparent relative"
    />
  );
};

export default Gallery;
