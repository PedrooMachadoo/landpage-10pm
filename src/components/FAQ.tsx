"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "Preciso ter equipe de TI para usar?",
    answer: "Não. Nossas soluções são pensadas para quem não tem time técnico. Você configura, a gente suporta.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer: "Não. Você começa quando quiser e pode cancelar sem multa. Queremos que fique porque funciona, não por obrigação.",
  },
  {
    question: "Serve para MEI mesmo?",
    answer: "Sim, especialmente para MEIs. Nossas soluções foram desenhadas para quem está no começo ou crescendo sem muita estrutura.",
  },
  {
    question: "Quantas soluções posso contratar?",
    answer: "Quantas precisar. Você pode começar com uma e adicionar conforme o negócio cresce.",
  },
];

export default function FAQ() {
  const { ref, inView } = useInView(0.08);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-secondary py-28 lg:py-36"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-14 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Dúvidas frequentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Perguntas{" "}
            <span className="text-accent">frequentes</span>
          </h2>
        </div>

        {/* Items */}
        <div className={`reveal ${inView ? "visible" : ""} divide-y divide-border`}>
          {faqs.map(({ question, answer }, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
              >
                <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                  {question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-border group-hover:border-accent/50 flex items-center justify-center transition-all duration-200">
                  {open === i
                    ? <Minus size={13} className="text-accent" />
                    : <Plus size={13} className="text-muted group-hover:text-accent transition-colors duration-200" />
                  }
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted text-sm leading-relaxed pr-10">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
