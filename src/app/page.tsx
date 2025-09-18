import Products from "@/components/products/Products";
import HeroSection from "@/components/hero/HeroSection";
import Gallery from "@/components/gallery/Gallery";
import Faq from "@/components/faq/Faq";
import Circle from "@/components/circle/Circle";

export default function Home() {
  return (
    <div className="  w-full h-auto flex flex-col justify-center items-center">
      <HeroSection />
      <Products />
      <Gallery />
    </div>
  );
}
