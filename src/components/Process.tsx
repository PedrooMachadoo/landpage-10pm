"use client";

import { MessageSquare, Compass, Code2, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { DottedSurface } from "@/components/ui/dotted-surface";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Conversa",
    description: "Você conta o desafio. A gente escuta de verdade.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Estratégia",
    description: "Mapeamos o caminho mais rápido do problema à solução.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Construção",
    description: "Desenvolvemos com agilidade. Você acompanha cada etapa.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega",
    description: "No ar em dias. Pronto pra crescer com você.",
  },
];

export default function Process() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-secondary py-28 lg:py-36"
    >

      {/* Animated dotted background */}
      <DottedSurface
        speed={0.018}
        particleSize={3}
        waveAmplitude={32}
        color="#4361ee"
        opacity={0.35}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-20 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Como funciona
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Da ideia{" "}
            <span className="text-accent">ao ar.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {steps.map(({ icon: Icon, number, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} relative group flex flex-col items-start lg:items-center lg:text-center px-0 lg:px-6`}
            >
              {/* Connector line — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] w-[calc(100%-5rem)] h-px bg-border z-0" />
              )}

              {/* Icon box */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                <Icon
                  size={20}
                  className="text-muted group-hover:text-accent transition-colors duration-300"
                />
              </div>

              {/* Step number */}
              <span className="text-[10px] font-mono text-accent/50 tracking-[0.3em] font-bold mb-2 uppercase">
                {number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
