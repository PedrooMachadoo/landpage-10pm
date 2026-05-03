"use client";

import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    area: "Sites & Landing Pages",
    dor: "Sua empresa não aparece onde o cliente procura?",
    beneficio: "Criamos sites que vendem. Não só decoram.",
  },
  {
    area: "Apps & Produtos Digitais",
    dor: "Sua ideia ainda está no papel?",
    beneficio: "Do conceito ao produto funcionando. Em semanas, não meses.",
  },
  {
    area: "Automação & Sistemas",
    dor: "Processo manual roubando seu tempo todo dia?",
    beneficio: "Sistemas sob medida que fazem o trabalho pesado por você.",
  },
  {
    area: "E-commerce",
    dor: "Quer vender online mas não sabe por onde começar?",
    beneficio: "Loja digital pronta para receber pedidos desde o primeiro dia.",
  },
  {
    area: "Design & Identidade",
    dor: "Sua marca não passa a confiança que você merece?",
    beneficio: "Design que posiciona e converte. Do logo ao produto final.",
  },
  {
    area: "Estratégia & Consultoria",
    dor: "Tem a ideia mas não sabe como executar?",
    beneficio: "A gente mapeia, prioriza e coloca no ar o que realmente importa.",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background py-28 lg:py-36"
    >
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-16 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            O que resolvemos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
            O que você precisa{" "}
            <span className="text-accent">resolver agora?</span>
          </h2>
          <p className="text-muted text-base">
            Escolha uma área e veja como a 10pm pode ajudar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ area, dor, beneficio }, i) => (
            <div
              key={area}
              className={`reveal reveal-delay-${(i % 3) + 1} ${inView ? "visible" : ""} group bg-card border border-border rounded-2xl p-8 hover:border-accent/30 hover:bg-card-hover transition-all duration-300 flex flex-col gap-4`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent/70">
                {area}
              </span>

              <h3 className="text-base font-bold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                {dor}
              </h3>

              <p className="text-muted text-sm leading-relaxed flex-1">
                {beneficio}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold mt-2 group-hover:gap-2.5 transition-all duration-200 cursor-pointer"
              >
                Saiba mais
                <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
