"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const AboutUs = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // ensures refs are ready before Swiper initializes
  }, []);
  return (
    <div className="w-full h-screen flex relative justify-center items-start lg:pt-[10vw] pt-[30vw] ">
      {/* Custom Navigation */}
      <div className="absolute lg:bottom-1/5 bottom-1/12 right-1/6 flex gap-10">
        <div
          ref={prevRef}
          className=" w-12 h-12 rounded-full   bg-[#111111] shadow-lg  shadow-black/40  transition-all duration-300 hover:bg-[#f8f8f8] hover:border-[#111111]/20  border  border-[#111111] group  flex-col gap-6 justify-start  delay-100 items-center overflow-hidden pl-0.5  z-20 pt-3    cursor-pointer text-4xl  flex "
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
            className="group-hover:-translate-y-[43px] delay-100 transition-all  duration-300"
          />
        </div>
        <div
          ref={nextRef}
          className=" w-12 h-12 rounded-full   bg-[#111111] shadow-lg  shadow-black/40  transition-all duration-300 hover:bg-[#f8f8f8]  border hover:border-[#111111]/20 border-[#111111] group  flex-col gap-6 justify-start  delay-100 items-center overflow-hidden pr-0.5  z-20 pt-3    cursor-pointer text-4xl  flex "
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
            className="group-hover:-translate-y-[43px] delay-100  opacity-90 transition-all duration-300 rotate-180"
          />
        </div>
      </div>
      <div className="lg:w-[85vw] w-[90vw]  lg:pr-[1.5vw]   ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1} // default (mobile)
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          loop
          grabCursor
          breakpoints={{
            640: {
              // sm
              slidesPerView: 1,
              spaceBetween: 80,
            },
            768: {
              // md
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              // lg
              slidesPerView: 2,
              spaceBetween: 150,
            },
            1280: {
              // xl
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1536: {
              // xl
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="لومین"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-1.webp"
              previewImg="/preview-1.webp"
            />
          </SwiperSlide>

          <SwiperSlide className="!w-auto">
            <ProductCard
              title="سرافین"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-2.webp"
              previewImg="/preview-2.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="والنته"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-3.webp"
              previewImg="/preview-3.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="سلستیا"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-4.webp"
              previewImg="/preview-4.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="آمارا"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-1.webp"
              previewImg="/preview-1.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="نووارا"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-2.webp"
              previewImg="/preview-2.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="ایزولده"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-3.webp"
              previewImg="/preview-3.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="لوسین"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-4.webp"
              previewImg="/preview-4.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="مارسلیا"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-1.webp"
              previewImg="/preview-1.webp"
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <ProductCard
              title="دی‌وینیا"
              desc="انگشتر نامزدی کلاسیک"
              productImg="/product-2.webp"
              previewImg="/preview-2.webp"
            />
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;
