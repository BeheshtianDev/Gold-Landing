import AboutUs from "@/components/about-us/AboutUs";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className="  w-full h-auto flex flex-col justify-center items-center">
      <HeroSection />
      <AboutUs />
    </div>
  );
}
