"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Mergulhamos fundo na sua marca, mercado e objetivos. Entrevistas com stakeholders, auditorias competitivas e uma imersão completa para entender o que você está construindo — e por quê isso importa.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Mapeamos a direção criativa e o roadmap. Frameworks de posicionamento, arquitetura de mensagem e um brief criativo claro que orienta cada decisão com precisão.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Criamos cada pixel com intenção e precisão. Identidade visual, UI design, sistemas de motion — tudo construído sobre a base estratégica que desenvolvemos juntos.",
  },
  {
    number: "04",
    title: "Lançamento",
    description:
      "Entregamos, iteramos e otimizamos para gerar impacto. Entrega de todos os assets, suporte pós-handoff e refinamentos pós-lançamento para garantir que tudo funcione no mundo real.",
  },
];

export default function Process() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-secondary py-28 lg:py-36 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-20`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-medium">
              Como Trabalhamos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight max-w-xl">
            Um processo feito
            <br />
            <em className="text-accent">para a precisão.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {steps.map(({ number, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} relative group`}
            >
              {/* Connector line (desktop, not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.35rem] left-1/2 w-full h-px bg-border z-0" />
              )}

              <div className="relative z-10 p-8 lg:pr-10 border-t-2 border-border group-hover:border-accent transition-colors duration-300 lg:border-t-0 lg:border-l-2 lg:first:border-l-0 flex flex-col gap-6">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full border border-border group-hover:border-accent flex items-center justify-center transition-colors duration-300 bg-secondary">
                  <span className="text-[11px] font-mono text-muted group-hover:text-accent transition-colors duration-300 tracking-wider font-bold">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
