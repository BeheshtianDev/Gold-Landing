"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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

    // ردیف‌ها
    const rows = gsap.utils.toArray<HTMLElement>(".gallery-row");

    rows.forEach((row) => {
      const cards = row.querySelectorAll<HTMLElement>(
        ".card-square, .card-rectangle"
      );

      // حالت اولیه
      gsap.set(cards, { y: -80, opacity: 0 });

      // وقتی ردیف وارد viewport شد → کارت‌ها یکی یکی بیان
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.5, // فاصله زمانی بین کارت اول و دوم
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          // markers: true, // برای تست
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
      className="w-full lg:h-[800vh] h-[900vh]  relative flex justify-center items-center flex-col   "
    >
      <div className="w-10/12 flex flex-col lg:gap-80 gap-20">
        {/* ردیف 1 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          {/* کارت 1 */}
          <div className="card-square lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] overflow-hidden ease-out relative group hover:rounded-xl transition-all duration-300 cursor-pointer">
            <img
              src="/gall-1.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full ease-out group-hover:scale-105 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 ease-out opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              سلستیا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 ease-out group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert delay-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* کارت 2 */}
          <div className="card-rectangle lg:w-[550px] w-[400px] lg:h-[600px] h-[500px] overflow-hidden group relative ease-out hover:rounded-xl cursor-pointer transition-all duration-300">
            <img
              src="/gall-2.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full h-full group-hover:scale-105 ease-out transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 ease-out opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              دی‌وینیا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 ease-out group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert delay-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ردیف 2 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          {/* کارت 3 */}
          <div className="card-square lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] overflow-hidden ease-out relative group hover:rounded-xl transition-all duration-300 cursor-pointer">
            <img
              src="/gall-3.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full ease-out group-hover:scale-105 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              آرورا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>

          {/* کارت 4 */}
          <div className="card-rectangle lg:w-[550px] w-[400px] lg:h-[600px] h-[500px] overflow-hidden group relative ease-out hover:rounded-xl cursor-pointer transition-all duration-300">
            <img
              src="/gall-4.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full h-full group-hover:scale-105 ease-out transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              سرناتا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ردیف 3 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          {/* کارت 5 */}
          <div className="card-square lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] overflow-hidden ease-out relative group hover:rounded-xl transition-all duration-300 cursor-pointer">
            <img
              src="/gall-5.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full ease-out group-hover:scale-105 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              ولوریا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>

          {/* کارت 6 */}
          <div className="card-rectangle lg:w-[550px] w-[400px] lg:h-[600px] h-[500px] overflow-hidden group relative ease-out hover:rounded-xl cursor-pointer transition-all duration-300">
            <img
              src="/gall-6.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full h-full group-hover:scale-105 ease-out transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              آمارا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ردیف 4 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          {/* کارت 7 */}
          <div className="card-square lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] overflow-hidden ease-out relative group hover:rounded-xl transition-all duration-300 cursor-pointer">
            <img
              src="/gall-7.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full ease-out group-hover:scale-105 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              کوروینا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>

          {/* کارت 8 */}
          <div className="card-rectangle lg:w-[550px] w-[400px] lg:h-[600px] h-[500px] overflow-hidden group relative ease-out hover:rounded-xl cursor-pointer transition-all duration-300">
            <img
              src="/gall-8.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full h-full group-hover:scale-105 ease-out transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              لوسترو
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ردیف 5 */}
        <div className="flex justify-between flex-col lg:flex-row lg:gap-0 gap-20 lg:items-end items-center gallery-row">
          {/* کارت 9 */}
          <div className="card-square lg:w-[500px] w-[400px] lg:h-[500px] h-[400px] overflow-hidden ease-out relative group hover:rounded-xl transition-all duration-300 cursor-pointer">
            <img
              src="/gall-9.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full ease-out group-hover:scale-105 transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              اورئوم
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>

          {/* کارت 10 */}
          <div className="card-rectangle lg:w-[550px] w-[400px] lg:h-[600px] h-[500px] overflow-hidden group relative ease-out hover:rounded-xl cursor-pointer transition-all duration-300">
            <img
              src="/gall-10.webp"
              alt=""
              className="object-cover group-hover:brightness-90 w-full h-full group-hover:scale-105 ease-out transition-all duration-500"
            />
            <span className="absolute bottom-0 right-7 opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
              اترنا
            </span>
            <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
              <Image
                src="/arrow.svg"
                alt=""
                width={22}
                height={10}
                className="rotate-[225deg] invert transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
