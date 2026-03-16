import { HeroSection } from "../components/HeroSection";
import { AboutSnapshot } from "../components/AboutSnapshot";
import { BrandsSection } from "../components/BrandsSection";
import { ProductsSection } from "../components/ProductsSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ProjectsGallery } from "../components/ProjectsGallery";
import { CtaSection } from "../components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <BrandsSection />
      <ProductsSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <CtaSection />
    </>
  );
}
