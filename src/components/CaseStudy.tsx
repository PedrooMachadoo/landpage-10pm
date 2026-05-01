"use client";

import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ─── Inline dashboard mockup for the case study ─── */
function CaseMockup({ accent = "#4361ee" }: { accent?: string }) {
  return (
    <div className="relative w-full select-none pointer-events-none">
      {/* Main card */}
      <div className="glow-blue bg-card border border-border rounded-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-border bg-secondary">
          <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        <div className="p-5 space-y-3">
          {/* KPI row */}
          <div className="bg-secondary rounded-xl p-4 flex items-start justify-between">
            <div>
              <p className="text-xs text-muted mb-1.5">Active Users</p>
              <p className="text-3xl font-bold text-primary">847</p>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: accent }}
            >
              <Zap size={16} className="text-white" />
            </div>
          </div>
          {/* Two metric cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-xs text-muted mb-1.5 flex items-center gap-1">
                <Users size={10} /> Participants
              </p>
              <p className="text-xl font-bold text-primary">12.8K</p>
              <span
                className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-2"
                style={{ backgroundColor: `${accent}22`, color: accent }}
              >
                +23%
              </span>
            </div>
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-xs text-muted mb-1.5 flex items-center gap-1">
                <TrendingUp size={10} /> Revenue
              </p>
              <p className="text-xl font-bold text-primary">$2.4M</p>
              <span
                className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-2"
                style={{ backgroundColor: `${accent}22`, color: accent }}
              >
                +45%
              </span>
            </div>
          </div>
          {/* Bar chart skeleton */}
          <div className="bg-secondary rounded-xl p-4">
            <div className="flex items-end gap-1.5 h-12">
              {[4, 6, 5, 8, 7, 10, 9, 12, 10, 11].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h * 10}%`,
                    backgroundColor: i >= 7 ? accent : "#2a2a2a",
                    opacity: i >= 7 ? 1 : 0.6,
                  }}
                />
              ))}
            </div>
          </div>
          {/* User row */}
          <div className="bg-secondary rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-border flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="w-full h-1.5 bg-border rounded-full" />
              <div className="w-3/4 h-1.5 bg-border/50 rounded-full" />
            </div>
            <div className="w-16 h-1.5 bg-border/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const cases = [
  {
    badge: "Caso em Destaque",
    client: "Noir Collective",
    headline: "Uma identidade de marca que virou referência cultural.",
    body: "Fizemos parceria com a Noir Collective para construir um sistema visual do zero — do nome ao lançamento. O resultado se tornou um dos projetos de marca mais citados de 2024.",
    metrics: [
      { icon: Users, value: "300%", label: "Reconhecimento de marca" },
      { icon: TrendingUp, value: "2.5M", label: "Impressões" },
      { icon: Zap, value: "94%", label: "Satisfação do cliente" },
    ],
    accent: "#4361ee",
  },
  {
    badge: "Produto Digital",
    client: "Volta Energy",
    headline: "Redesenhando o futuro da gestão de energia limpa.",
    body: "A Volta precisava de um produto à altura da sua visão ousada. Desenhamos e entregamos uma plataforma web flagship que triplicou os leads qualificados em 90 dias.",
    metrics: [
      { icon: TrendingUp, value: "3x", label: "Crescimento de leads" },
      { icon: Users, value: "50K+", label: "Usuários ativos/mês" },
      { icon: Zap, value: "99.9%", label: "Disponibilidade" },
    ],
    accent: "#4361ee",
  },
];

export default function CaseStudy() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-secondary py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-20 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            Trabalhos Selecionados
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Trabalhos que falam{" "}
            <span className="text-accent">por si só</span>
          </h2>
        </div>

        {/* Cases — alternating left/right */}
        <div className="space-y-24">
          {cases.map(({ badge, client, headline, body, metrics, accent }, i) => (
            <div
              key={client}
              className={`reveal ${inView ? "visible" : ""} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side */}
              <div>
                <span className="inline-flex items-center gap-2 border border-border text-muted text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  {badge}
                </span>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                  {client}
                </h3>
                <p className="text-lg text-primary/80 leading-relaxed mb-4 font-medium">
                  {headline}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  {body}
                </p>
                {/* Metrics */}
                <div className="flex items-center gap-8 mb-8 py-6 border-t border-border">
                  {metrics.map(({ icon: Icon, value, label }) => (
                    <div key={label}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon size={13} className="text-muted" />
                        <p className="text-2xl font-bold text-primary">{value}</p>
                      </div>
                      <p className="text-xs text-muted">{label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-border hover:border-accent/50 text-primary text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/5"
                >
                  Ver caso completo
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Mockup side */}
              <div className="flex items-center justify-center py-8">
                <div className="w-full max-w-sm">
                  <CaseMockup accent={accent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
