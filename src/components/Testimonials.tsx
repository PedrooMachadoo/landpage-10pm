"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote: "Em menos de uma semana já tinha tudo funcionando. Nunca fui tão rápida pra resolver a parte financeira do meu negócio.",
    name: "Ana Carla M.",
    role: "MEI — Consultoria",
    initial: "A",
  },
  {
    quote: "O preço é justo e o suporte responde de verdade. Parece que tem alguém do lado.",
    name: "Rafael S.",
    role: "ME — Loja de materiais",
    initial: "R",
  },
  {
    quote: "Finalmente consegui separar as finanças da empresa das pessoais. Simples assim.",
    name: "Juliana P.",
    role: "MEI — Moda e acessórios",
    initial: "J",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background py-28 lg:py-36"
    >
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #111111, transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${inView ? "visible" : ""} mb-16 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Quem já usa a 10pm
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
            Pequenas empresas que pararam{" "}
            <span className="text-accent">de improvisar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, initial }, i) => (
            <div
              key={name}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-accent/20 transition-colors duration-300`}
            >
              <div className="text-accent/40 text-5xl font-serif leading-none select-none">
                &ldquo;
              </div>

              <p className="text-foreground/75 text-sm leading-[1.85] flex-1">
                {quote}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-bold">{initial}</span>
                </div>
                <div>
                  <p className="text-primary text-sm font-semibold">{name}</p>
                  <p className="text-muted text-xs mt-0.5">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

