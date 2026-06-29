import FeaturesSection from "@/components/home/features/FeaturesSection";
import EverythingSection from "@/components/home/Everything/EverythingSection";
import Hero from "@/components/home/Hero/Hero";
import ProductShowcase from "@/components/home/ProductShowcase/ProductShowcase";
import WhyMotoHaveSection from "@/components/home/WhyMotoHave/WhyMotoHaveSection";
import PricingSection from "@/components/home/Pricing/PricingSection";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import FAQSection from "@/components/home/FAQ/FAQSection";
import FinalCTASection from "@/components/home/FinalCTA/FinalCTASection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      <EverythingSection />
      <WhyMotoHaveSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <FinalCTASection />

    </>
  );
}