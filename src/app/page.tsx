import Products from "@/components/products/Products";
import HeroSection from "@/components/hero/HeroSection";
import Gallery from "@/components/gallery/Gallery";
import Category from "@/components/category/Category";
import ProgressCircle from "@/components/gallery/ProggresCircle";
import Comments from "@/components/comment/Comments";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="  w-full h-auto flex flex-col justify-center items-center">
      <HeroSection />
      <Category />
      <Products />
      <Gallery />
      <ProgressCircle />
      <div className="w-full h-[500vh]"></div>
      <Comments />
      <Footer />
    </div>
  );
}
