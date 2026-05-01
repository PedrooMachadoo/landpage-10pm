"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote:
      "A 10 PM não apenas criou nossa marca — eles articularam algo que nem sabíamos que queríamos dizer. A clareza que trouxeram foi extraordinária.",
    name: "Sofia Carvalho",
    role: "CEO, Meridian Fund",
    initial: "S",
  },
  {
    quote:
      "Trabalhar com essa equipe foi diferente de tudo que já vivemos. Eles questionaram cada premissa e nos empurraram em direção a algo verdadeiramente original.",
    name: "James Okafor",
    role: "Fundador, Volta Energy",
    initial: "J",
  },
  {
    quote:
      "Nosso site passou de vergonhoso ao nosso melhor vendedor. A atenção ao detalhe em cada nível — motion, tipografia, copy — elevou o produto inteiro.",
    name: "Lena Fischer",
    role: "Head de Produto, Axiom Studio",
    initial: "L",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-background py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${inView ? "visible" : ""} mb-16 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted text-base">
            Histórias de empresas que transformaram suas marcas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, initial }, i) => (
            <div
              key={name}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-accent/20 transition-colors duration-300`}
            >
              {/* Quote icon */}
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
