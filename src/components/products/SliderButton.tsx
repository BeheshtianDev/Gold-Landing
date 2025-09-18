import Image from "next/image";
import React from "react";

const SliderButton = () => {
  return (
    <div className="absolute peer lg:bottom-1/5 bottom-1/12 right-1/6 flex gap-10 ">
      <button className=" w-12 h-12 rounded-full   bg-[#111111] shadow-lg  shadow-black/40  transition-all duration-300 hover:bg-[#f8f8f8] hover:border-[#111111]/20  border  border-[#111111] group  flex-col gap-6 justify-start  delay-100 items-center overflow-hidden pl-0.5  z-20 pt-3    cursor-pointer text-4xl  flex ">
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
      </button>
      <button className=" w-12 h-12 rounded-full   bg-[#111111] shadow-lg  shadow-black/40  transition-all duration-300 hover:bg-[#f8f8f8]  border hover:border-[#111111]/20 border-[#111111] group  flex-col gap-6 justify-start  delay-100 items-center overflow-hidden pr-0.5  z-20 pt-3    cursor-pointer text-4xl  flex ">
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
      </button>
    </div>
  );
};

export default SliderButton;
