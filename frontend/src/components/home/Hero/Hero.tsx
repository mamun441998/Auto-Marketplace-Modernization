import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid min-h-[700px] items-center gap-16 py-20 lg:grid-cols-2">

          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroImage />

        </div>
      </Container>
    </section>
  );
}