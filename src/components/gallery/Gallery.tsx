"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card"; // import reusable Card

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    // background toggle
    gsap.to(el, {
      backgroundColor: "#111111",
      duration: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top top-=500px",
        end: "bottom-=500px bottom",
        toggleActions: "play reverse play reverse",
      },
    });

    // rows animation
    const rows = gsap.utils.toArray<HTMLElement>(".gallery-row");

    rows.forEach((row) => {
      const cards = row.querySelectorAll<HTMLElement>(
        ".card-square, .card-rectangle"
      );

      gsap.set(cards, { y: -80, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full lg:h-[800vh] h-[900vh] relative flex justify-center items-center flex-col"
    >
      <div className="w-10/12 flex flex-col lg:gap-80 gap-20">
        {/* Row 1 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          <Card
            variant="square"
            number={1}
            image="/gall-1.webp"
            title="سلستیا"
          />
          <Card
            variant="rectangle"
            number={2}
            image="/gall-2.webp"
            title="دی‌وینیا"
          />
        </div>

        {/* Row 2 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          <Card
            variant="square"
            number={3}
            image="/gall-3.webp"
            title="آرورا"
          />
          <Card
            variant="rectangle"
            number={4}
            image="/gall-4.webp"
            title="سرناتا"
          />
        </div>

        {/* Row 3 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          <Card
            variant="square"
            number={5}
            image="/gall-5.webp"
            title="ولوریا"
          />
          <Card
            variant="rectangle"
            number={6}
            image="/gall-6.webp"
            title="آمارا"
          />
        </div>

        {/* Row 4 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          <Card
            variant="square"
            number={7}
            image="/gall-7.webp"
            title="کوروینا"
          />
          <Card
            variant="rectangle"
            number={8}
            image="/gall-8.webp"
            title="لوسترو"
          />
        </div>

        {/* Row 5 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          <Card
            variant="square"
            number={9}
            image="/gall-9.webp"
            title="اورئوم"
          />
          <Card
            variant="rectangle"
            number={10}
            image="/gall-10.webp"
            title="اترنا"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
