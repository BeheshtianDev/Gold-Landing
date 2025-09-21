"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "ایده‌پردازی",
    desc: "فرآیند با گفت‌وگوی اختصاصی آغاز می‌شود؛ جایی که سلیقه، سبک زندگی و خواسته‌های مشتری بررسی شده و تبدیل به ایده‌ای اولیه برای طراحی می‌گردد.",
  },
  {
    title: "طراحی دیجیتال",
    desc: "طراحان مجموعه، اسکچ دستی یا مدل دیجیتال سه‌بعدی آماده می‌کنند تا مشتری تصویر روشنی از محصول نهایی داشته باشد و در صورت نیاز تغییرات اعمال شود.",
  },
  {
    title: "انتخاب متریال",
    desc: "مشتری نوع طلای مورد نظر (زرد، سفید یا رزگلد) و همچنین سنگ‌های قیمتی یا الماس‌ها را انتخاب می‌کند تا قطعه‌ای منحصر‌به‌فرد ساخته شود.",
  },
  {
    title: "مدل اولیه",
    desc: "برای اطمینان از دقت جزئیات، مدل اولیه به‌صورت مومی یا چاپ سه‌بعدی ساخته می‌شود تا فرم و تناسبات قبل از ساخت اصلی بررسی گردد.",
  },
  {
    title: "ریخته‌گری و پرداخت",
    desc: "مدل تأییدشده وارد مرحله ریخته‌گری طلا می‌شود. سپس قطعه حکاکی، پرداخت و صیقل داده می‌شود تا درخشش و کیفیتی ماندگار داشته باشد.",
  },
  {
    title: "تحویل با گارانتی",
    desc: "محصول نهایی در بسته‌بندی  و همراه با گارانتی اصالت و کیفیت به مشتری تحویل داده می‌شود؛ نتیجه مسیری که از یک ایده شروع شد و به اثری جاودانه رسید.",
  },
];

export default function ProgressCircle() {
  useEffect(() => {
    const circle = document.querySelector(".progress-path") as SVGPathElement;
    const dots = gsap.utils.toArray<HTMLElement>(".step-dot");
    const contents = gsap.utils.toArray<HTMLElement>(".step-content");

    const circumference = 2 * Math.PI * 385;
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    // Scroll animation for circle
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-wrapper",
        start: "top top",
        end: "+=5000", // length of scroll
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const stepIndex = Math.floor(progress * steps.length);

          dots.forEach((dot, i) => {
            gsap.to(dot, {
              backgroundColor: i <= stepIndex ? "#FFD700" : "#B3B3B3",
              duration: 0.3,
            });
          });

          contents.forEach((c, i) => {
            gsap.to(c, {
              opacity: i === stepIndex ? 1 : 0,
              duration: 0.3,
            });
          });
        },
      },
    });

    // Animate circle stroke
    tl.to(circle, { strokeDashoffset: 0, ease: "none" });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="sticky-wrapper w-full relative h-[1000px] flex  justify-center items-center">
      {/* Circle */}
      <svg width="780" height="780" viewBox="0 0 780 780" className="absolute">
        <circle
          cx="390"
          cy="390"
          r="385"
          stroke="#B3B3B3"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="390"
          cy="390"
          r="385"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
          className="progress-path -rotate-90 origin-center"
        />
      </svg>

      {/* Step Dots */}
      <div className="absolute w-full h-full flex justify-center rotate-[270deg] items-center">
        {steps.map((_, i) => (
          <div
            key={i}
            className="step-dot w-5 h-5 rounded-full flex justify-center items-center bg-[#B3B3B3] absolute"
            style={{
              transform: `rotate(${
                (360 / steps.length) * i
              }deg) translate(385px)`,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className=" text-center flex justify-center items-center !bg-red-500">
        {steps.map((step, i) => (
          <div
            key={i}
            className="step-content absolute w-1/4  flex justify-center items-center flex-col gap-5  opacity-0 "
          >
            <span className="block ">{`طراحی اختصاصی  - مرحله  ${
              i + 1
            } `}</span>
            <h2 className="text-6xl font-medium ">{step.title}</h2>
            <Image src="/loop.svg" alt="" width={250} height={400} />
            
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
