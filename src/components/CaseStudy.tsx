"use client";

import { Timer, Wallet, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import CodeEditorMockup from "@/components/ui/CodeEditorMockup";

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
  const { ref, inView } = useInView(0.05, "0px");

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative"
      style={{ background: "linear-gradient(to bottom, #000000 0%, #0a0a0a 200px)" }}
    >

      {/* ── Cards ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map(({ badge, titulo, descricao, icon: Icon }, i) => (
            <div
              key={badge}
              className="group rounded-2xl p-8 transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : "translateY(56px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
                transitionDelay: `${i * 120}ms`,
                background: "linear-gradient(145deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.025) 45%, rgba(67,97,238,0.04) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(67,97,238,0.28)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.09), 0 2px 6px rgba(0,0,0,0.1), 0 8px 28px rgba(67,97,238,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <Icon size={20} className="text-muted group-hover:text-accent transition-colors duration-300" />
              </div>
              <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-semibold text-accent/70 mb-3">
                {badge}
              </span>
              <h3 className="text-base font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
                {titulo}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Headline */}
        <div
          className="text-center mt-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0px)" : "translateY(32px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "400ms",
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Você tem a ideia.{" "}
            <span className="text-accent">A gente tem o time.</span>
          </h2>
        </div>
      </div>

      {/* ── IDE animado em perspectiva ── */}
      <div className="relative z-10">
        {/* Fade superior para integrar com o conteúdo acima */}
        <div
          className="absolute top-0 inset-x-0 h-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, #0a0a0a, transparent)" }}
        />
        {/* Fade inferior para transição suave com a próxima seção */}
        <div
          className="absolute bottom-0 inset-x-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
        />

        <div
          className="mx-auto max-w-5xl px-6 lg:px-10 pb-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
        >
          <div style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
            <div style={{ transform: "rotateX(14deg)", transformOrigin: "top center" }}>
              <CodeEditorMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
