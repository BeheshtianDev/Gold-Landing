import Image from "next/image";
import React from "react";

const CommentCard = () => {
  return (
    <div className="comment-card w-96 h-64  shadow-lg/5 rounded-2xl justify-between bg-white flex flex-col p-4 opacity-90" dir="rtl">
      <div className="flex  w-full justify-between   items-start">
        <div className="flex justify-center gap-3  ">
          <Image
            src="/avatar.avif"
            alt=""
            width={60}
            height={100}
            className="rounded-full h-[60px] object-cover object-top "
            priority
          />
          <div className=" text-right flex flex-col mt-2 gap-1 text-[#111111]/90 font-medium text-sm">
            سپیده جمشیدی
            <span className="text-[10px] opacity-50 font-normal">
              سرویس طلای 24 عیار
            </span>
          </div>
        </div>
        <Image
          src="/four-stars.svg"
          alt=""
          width={64}
          height={100}
          className=" ml-2 mt-3   "
          priority
        />
      </div>
      <div className="w-full text-[#111111]/90 leading-5 text-justify text-xs ">
        چند وقت پیش از این سایت یک سرویس طلای ۲۴ عیار خریدم. کیفیت طلا و طراحی
        واقعاً عالی بود و بسته‌بندی هم خیلی شیک و مطمئن به دستم رسید. تنها چیزی
        که باعث شد به جای ۵ ستاره، ۴ ستاره بدم این بود که زمان تحویل کمی بیشتر
        از چیزی که انتظار داشتم طول کشید. در کل خرید مطمئنی بود و احتمالاً برای
        هدیه بعدی دوباره همین‌جا سفارش می‌دم.
      </div>
      <div className=" w-full text-[10px] text-[#111111]/50 flex justify-between">
        ۲۳ شهریور ۱۴۰۴
        <span>
          <Image
            src="/Check.svg"
            alt=""
            width={9}
            height={100}
            className="rounded-full mb-0.5 inline ml-1"
            priority
          />
          خرید تایید شده
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
