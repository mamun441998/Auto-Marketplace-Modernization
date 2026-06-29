import Container from "@/components/layout/Container";

import WhyMotoHaveHeader from "./WhyMotoHaveHeader";
import WhyMotoHaveContent from "./WhyMotoHaveContent";

export default function WhyMotoHaveSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/30 blur-3xl" />

      <Container>

        <WhyMotoHaveHeader />

        <WhyMotoHaveContent />

      </Container>

    </section>
  );
}