import { HeroSection } from "../components/HeroSection";
import { AboutSnapshot } from "../components/AboutSnapshot";
import { ProductsSection } from "../components/ProductsSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ProjectsGallery } from "../components/ProjectsGallery";
import { CtaSection } from "../components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <ProductsSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <CtaSection />
    </>
  );
}
