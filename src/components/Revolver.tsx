"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Revolver = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const texts = ["دست ساز", "ماندگار", "خالص", "ظریف", "اصیل", "لوکس"];

    const updateTexts = (index: number) => {
      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.innerText = texts[index % texts.length];
        text2Ref.current.innerText = texts[(index + 1) % texts.length];
      }
    };

    updateTexts(0);
    let lastIndex = 0;

    gsap.fromTo(
      textRef.current,
      { rotate: 0 },
      {
        rotate: 720, // 3 full rotations
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Calculate current rotation in degrees
            const currentRotation = self.progress * 720; // maps 0–1 to 0–540°
            const step = Math.floor(currentRotation / 270); // 1 step per 180°
            if (step !== lastIndex) {
              updateTexts(step);
              lastIndex = step;
            }
          },
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen relative flex flex-row-reverse justify-between items-center text-black text-[180px]"
    >
      <div className="w-2/12 h-full bg-gradient-to-l from-[#F8F8F8] to-transparent absolute right-0 z-10"></div>

      {/* Revolving text */}
      <div
        ref={textRef}
        className="w-[1500px] flex justify-between translate-x-[60vw] items-center"
      >
        <div ref={text2Ref} className="scale-y-[-1] scale-x-[-1]"></div>
        <div ref={text1Ref}></div>
      </div>
    </div>
  );
};

export default Revolver;
