"use client";

import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

const Products = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 350; // width of one card
    const gap = 50; // gap in px (2vw roughly, adjust as needed)
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-screen flex relative justify-center items-start lg:pt-[10vw] pt-[30vw] ">
      <div className="absolute h-[440px] w-1/12 right-0 bg-gradient-to-l  from-[#F8F8F8] via-[#F8F8F8]  to-transparent z-50"></div>
      <div className="absolute h-[440px] w-1/12 left-0 bg-gradient-to-r  from-[#F8F8F8] via-[#F8F8F8]  to-transparent z-50"></div>
      {/* Custom Navigation */}
      <div className="absolute lg:bottom-1/5 bottom-1/12 right-1/6 flex gap-10">
        <button
          onClick={() => scroll("left")}
          className=" w-12 h-12 rounded-full bg-[#111111] shadow-lg shadow-black/40 transition-all duration-300 hover:bg-[#f8f8f8] hover:border-[#111111]/20 border border-[#111111] group flex-col gap-6 justify-start delay-100 items-center overflow-hidden pl-0.5 z-20 pt-3 cursor-pointer text-4xl flex"
        >
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={10}
            className="group-hover:-translate-y-[50px] delay-100 transition-all invert duration-300"
          />
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={10}
            className="group-hover:-translate-y-[43px] delay-100 transition-all duration-300"
          />
        </button>
        <button
          onClick={() => scroll("right")}
          className=" w-12 h-12 rounded-full bg-[#111111] shadow-lg shadow-black/40 transition-all duration-300 hover:bg-[#f8f8f8] border hover:border-[#111111]/20 border-[#111111] group flex-col gap-6 justify-start delay-100 items-center overflow-hidden pr-0.5 z-20 pt-3 cursor-pointer text-4xl flex"
        >
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={10}
            className="group-hover:-translate-y-[50px] delay-100 transition-all invert duration-300 rotate-180"
          />
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={10}
            className="group-hover:-translate-y-[43px] delay-100 opacity-90 transition-all duration-300 rotate-180"
          />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex w-[90vw] items-center  overflow-scroll lg:gap-[3.5vw] gap-[12vw] rounded-2xl scroll-smooth"
      >
        {/* Product Cards */}
        <ProductCard
          title="لومین"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-1.webp"
          previewImg="/preview-1.webp"
        />
        <ProductCard
          title="سرافین"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-2.webp"
          previewImg="/preview-2.webp"
        />
        <ProductCard
          title="والنته"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-3.webp"
          previewImg="/preview-3.webp"
        />
        <ProductCard
          title="سلستیا"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-4.webp"
          previewImg="/preview-4.webp"
        />
        <ProductCard
          title="لومین"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-1.webp"
          previewImg="/preview-1.webp"
        />
        <ProductCard
          title="سرافین"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-2.webp"
          previewImg="/preview-2.webp"
        />
        <ProductCard
          title="والنته"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-3.webp"
          previewImg="/preview-3.webp"
        />
        <ProductCard
          title="سلستیا"
          desc="انگشتر نامزدی کلاسیک"
          productImg="/product-4.webp"
          previewImg="/preview-4.webp"
        />
      </div>
    </div>
  );
};

export default Products;
