"use client";

import Image from "next/image";
import React from "react";

interface CardProps {
  variant: "square" | "rectangle";
  number: number;
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ variant, number, image, title }) => {
  return (
    <div
      className={`card-${variant} ${
        variant === "square"
          ? "lg:w-[500px] w-[350px] lg:h-[500px] h-[400px]"
          : "lg:w-[550px] w-[350px] lg:h-[600px] h-[500px]"
      } ease-out relative group transition-all duration-300 cursor-pointer`}
    >
      {/* number (always visible, no hover effect) */}
      <span className="absolute left-0 top-0 text-3xl -translate-y-14 text-white pointer-events-none select-none group-hover:opacity-0 transition-all duration-300">
        {number}
      </span>

      {/* image */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 ease-out transition-all duration-500"
      />

      {/* title */}
      <span className="absolute bottom-0 right-7 ease-out opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 transition-all duration-500 text-3xl font-medium">
        {title}
      </span>

      {/* icon */}
      <div className="w-14 h-14 rounded-full bg-[#111111]/80 translate-x-5 ease-out group-hover:translate-0 opacity-0 group-hover:opacity-100 translate-y-5 transition-all duration-500 flex justify-center items-center pr-1 pb-1 top-5 left-5 absolute">
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={22}
          height={10}
          className="rotate-[225deg] invert transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
