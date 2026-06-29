import Container from "@/components/layout/Container";

import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-100/20 blur-3xl" />

      <Container>
        <FAQHeader />

        <FAQList />
      </Container>
    </section>
  );
}