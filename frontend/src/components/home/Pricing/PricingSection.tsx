import Container from "@/components/layout/Container";

import PricingGrid from "./PricingGrid";
import PricingHeader from "./PricingHeader";

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-100/20 blur-3xl" />

      <Container>
        <PricingHeader />

        <PricingGrid />
      </Container>
    </section>
  );
}