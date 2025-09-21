import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="h-[120vh] w-full flex justify-end flex-col items-center gap-10">
      <div className="w-4/5  h-4/5  bg-white rounded-2xl grid grid-rows-2 grid-cols-3 gap-2 p-2">
        <div className="row-start-1 justify-items-center relative overflow-hidden rounded-2xl col-start-1 group col-span-2 ">
          <Image
            src="/ring-2.webp"
            alt=""
            width={600}
            height={400}
            className="w-full h-full object-cover absolute peer object-bottom hover:scale-100 group-hover:scale-100 lg:scale-110 transition-all  duration-500 ease-out cursor-pointer"
            priority
          />
          <div className="w-full h-[75px]    px-2  rounded-2xl    lg:translate-y-40 absolute bottom-2 ease-out peer-hover:translate-y-0 hover:translate-y-0 transition-all duration-500">
            <div className="w-full h-full  pl-2 pr-7 py-2 bg-white/90 backdrop-blur-lg  rounded-2xl flex justify-between items-center  text-[#111111]/90 text-xl font-semibold ">
              <div className=" flex gap-1 justify-center items-start flex-col ">
                انگشتر
                <span className="text-sm text-[#111111]/40 font-normal">
                  طلای زرد 18 عیار
                </span>
              </div>
              <div className="h-full w-[59px] flex items-center justify-center pb-0.5 pr-1 bg-[#111111]/90 rounded-xl">
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="rotate-180 invert"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-1 justify-items-center relative overflow-hidden rounded-2xl col-start-3 group col-span-1 ">
          <Image
            src="/chain.jpg"
            alt=""
            width={600}
            height={400}
            className="w-full h-full object-cover peer object-center hover:scale-100 group-hover:scale-100 lg:scale-110 transition-all  duration-500 ease-out cursor-pointer"
            priority
          />
          <div className="w-full h-[75px]    px-2  rounded-2xl    lg:translate-y-40 absolute bottom-2 ease-out peer-hover:translate-y-0 hover:translate-y-0 transition-all duration-500">
            <div className="w-full h-full  pl-2 pr-7 py-2 bg-white/90 backdrop-blur-lg  rounded-2xl flex justify-between items-center text-[#111111]/90 text-xl font-semibold ">
              <div className=" flex gap-1 justify-center items-start flex-col ">
                زنجیر مردانه
                <span className="text-sm text-[#111111]/40 font-normal">
                  طلای زرد 18 عیار
                </span>
              </div>
              <div className="h-full w-[59px] flex items-center justify-center pb-0.5 pr-1 bg-[#111111]/90 rounded-xl">
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="rotate-180 invert"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 justify-items-center relative overflow-hidden rounded-2xl col-start-1 group col-span-1 ">
          <Image
            src="/model-3.jpg"
            alt=""
            width={600}
            height={400}
            className="w-full h-full object-cover peer object-center hover:scale-100 group-hover:scale-100 lg:scale-110 transition-all  duration-500 ease-out cursor-pointer"
            priority
          />
          <div className="w-full h-[75px]    px-2  rounded-2xl    lg:translate-y-40 absolute bottom-2 ease-out peer-hover:translate-y-0 hover:translate-y-0 transition-all duration-500">
            <div className="w-full h-full  pl-2 pr-7 py-2 bg-white/90 backdrop-blur-lg  rounded-2xl flex justify-between items-center text-[#111111]/90 text-xl font-semibold ">
              <div className=" flex gap-1 justify-center items-start flex-col ">
                گردن بند
                <span className="text-sm text-[#111111]/40 font-normal">
                  طلای زرد 18 عیار
                </span>
              </div>
              <div className="h-full w-[59px] flex items-center justify-center pb-0.5 pr-1 bg-[#111111]/90 rounded-xl">
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="rotate-180 invert"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 justify-items-center relative overflow-hidden rounded-2xl col-start-2 group col-span-2 ">
          <Image
            src="/model-4.webp"
            alt=""
            width={600}
            height={400}
            className="w-full h-full object-cover peer object-center hover:scale-100 group-hover:scale-100 lg:scale-110 transition-all  duration-500 ease-out cursor-pointer"
            priority
          />
          <div className="w-full h-[75px]    px-2  rounded-2xl    lg:translate-y-40 absolute bottom-2 ease-out peer-hover:translate-y-0 hover:translate-y-0 transition-all duration-500">
            <div className="w-full h-full  pl-2 pr-7 py-2 bg-white/90 backdrop-blur-lg  rounded-2xl flex justify-between items-center text-[#111111]/90 text-xl font-semibold ">
              <div className=" flex gap-1 justify-center items-start flex-col ">
                دست بند
                <span className="text-sm text-[#111111]/40 font-normal">
                  طلای زرد 18 عیار
                </span>
              </div>
              <div className="h-full w-[59px] flex items-center justify-center pb-0.5 pr-1 bg-[#111111]/90 rounded-xl">
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="rotate-180 invert"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
