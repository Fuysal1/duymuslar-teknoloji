import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProductSection } from "@/components/home/featured-product-section";
import { ServicesSection } from "@/components/home/services-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductSection />
      <ServicesSection />
      <ClosingCtaSection />
    </>
  );
}
