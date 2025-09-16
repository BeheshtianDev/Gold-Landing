import Image from "next/image";
import React from "react";

type ProductCardProps = {
  title: string;
  desc: string;
  productImg: string;
  previewImg: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  desc,
  productImg,
  previewImg,
}) => {
  return (
    <div className="h-[440px] w-[350px] lg:hover:w-[700px] lg:hover:h-[350px] gap-5 group bg-white  overflow-hidden transition-all duration-700  rounded-3xl border border-[#111111]/7 flex flex-col justify-center cursor-pointer items-center relative">
      {/* Preview Image */}
      <Image
        src={previewImg}
        alt={title}
        width={600}
        height={400}
        className="preview rounded-3xl h-[300px] w-[300px] object-cover object-bottom  z-10 absolute opacity-0 top-[25px] group-hover:opacity-100 right-[25px] transition-all delay-200 duration-300 "
        priority
      />

      {/* Product Image */}
      <Image
        src={productImg}
        alt={title}
        width={600}
        height={400}
        className="product rounded-3xl h-[300px] w-[300px] object-cover object-bottom absolute  z-10  group-hover:opacity-0 top-[25px] right-[25px] transition-all lg:group-hover:translate-x-10 delay-200 duration-300"
        priority
      />
      <div className="w-full h-[300px] absolute  flex items-start justify-start pt-5 gap-5 flex-col pr-10 -translate-y-10 lg:group-hover:translate-y-0 transition-all duration-500 delay-200 opacity-0 lg:group-hover:opacity-100">
        <span className="text-[#111111]/90 text-3xl font-medium lg:group-hover:-translate-x-80  transition-all delay-200 duration-1000 ">
          {title}
        </span>
        <span className="text-[#111111]/30 lg:group-hover:-translate-x-80    transition-all delay-300 duration-1000 ">
          {desc}
        </span>
        <span className="text-[#111111]/30 lg:group-hover:-translate-x-80   transition-all delay-[350ms] duration-1000 ">
          2.5&nbsp;&nbsp; گرم طلای &nbsp; 18 عیار
        </span>
        <span className="text-[#111111]/30 lg:group-hover:-translate-x-80   leading-8 text-nowrap transition-all delay-[400ms] duration-1000 ">
          طراحی ظریف و درخشان
          <br />
          ترکیبی از لطافت و شکوه/ مناسب استایل مینیمال زنانه
        </span>
        <bdi className=" price text-lg text-[#111111]/90 lg:group-hover:-translate-x-80  transition-all delay-[450ms] duration-1000  font-medium">
          ۳۶,۴۵۳,۰۰۰
          <span className="woocommerce-Price-currencySymbol">تومان</span>
        </bdi>
      </div>
      {/* Text Content */}
      <div className="flex flex-col transition-all duration-500 p-1 lg:group-hover:-translate-y-20 absolute bottom-5 lg:group-hover:scale-x-0  gap-2 lg:group-hover:opacity-0">
        <span className="text-[#111111] text-3xl font-medium">{title}</span>
        <span className="text-[#111111]/30">
          {desc}
          <bdi className=" price text-[#111111]/90 mr-8 font-medium">
            ۳۶,۴۵۳,۰۰۰
            <span className="woocommerce-Price-currencySymbol">تومان</span>
          </bdi>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
