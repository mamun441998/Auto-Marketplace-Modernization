import Container from "@/components/layout/Container";

import FinalCTAContent from "./FinalCTAContent";
import FinalCTADashboard from "./FinalCTADashboard";

export default function FinalCTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-950

        py-24
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <Container>
        <div
          className="
            relative
            z-10

            grid
            grid-cols-1
            items-center

            gap-16

            lg:grid-cols-2
          "
        >
          <FinalCTAContent />

          <FinalCTADashboard />
        </div>
      </Container>
    </section>
  );
}