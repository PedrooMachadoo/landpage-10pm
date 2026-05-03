"use client";

import { Timer, Wallet, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const pilares = [
  {
    badge: "Ágil",
    titulo: "Você lança enquanto a concorrência ainda planeja.",
    descricao: "Sem semanas de espera. Em dias você já está testando no mercado.",
    icon: Timer,
  },
  {
    badge: "Acessível",
    titulo: "Time completo pelo preço de um freelancer.",
    descricao: "Estratégia, design e código juntos. Sem contratar três pessoas diferentes.",
    icon: Wallet,
  },
  {
    badge: "Completo",
    titulo: "Da ideia ao produto. Sem terceirizar partes.",
    descricao: "Um só lugar para pensar, criar e entregar. Do briefing ao lançamento.",
    icon: Layers,
  },
];

export default function CaseStudy() {
  const { ref, inView } = useInView(0.12, "0px 0px -120px 0px");

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-secondary py-28 lg:py-36"
    >
      {/* Gradient top — hero dissolves into this section */}
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000000 0%, transparent 100%)" }}
      />

      {/* Gradient bottom — this section dissolves into services */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal-soft ${inView ? "visible" : ""} mb-20 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Por que a 10pm
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Você tem a ideia.{" "}
            <span className="text-accent">A gente tem o time.</span>
          </h2>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map(({ badge, titulo, descricao, icon: Icon }, i) => (
            <div
              key={badge}
              className={`reveal-soft reveal-delay-${i + 1} ${inView ? "visible" : ""} group bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border-light flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                <Icon size={20} className="text-muted group-hover:text-accent transition-colors duration-300" />
              </div>
              <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-semibold text-accent/70 mb-4">
                {badge}
              </span>
              <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                {titulo}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
