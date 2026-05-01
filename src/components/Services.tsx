"use client";

import { useInView } from "@/hooks/useInView";
import { Layers, Monitor, Play, BarChart2 } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Branding & Identidade",
    description:
      "Criamos sistemas de marca instantaneamente reconhecíveis e construídos para durar — do naming e estratégia até a linguagem visual e o manual da marca.",
    tags: ["Design de Logo", "Sistema de Marca", "Manual"],
  },
  {
    icon: Monitor,
    title: "Web Design & Dev",
    description:
      "Experiências digitais que convertem visitantes em clientes fiéis. Projetamos e desenvolvemos sites performáticos e bonitos que encantam em cada detalhe.",
    tags: ["UI/UX", "Desenvolvimento", "CMS"],
  },
  {
    icon: Play,
    title: "Motion & Animação",
    description:
      "Movimento que adiciona dimensão e energia à sua marca. De micro-interações a filmes institucionais completos, fazemos marcas ganharem vida.",
    tags: ["Motion Design", "2D/3D", "Filme de Marca"],
  },
  {
    icon: BarChart2,
    title: "Estratégia & Consultoria",
    description:
      "Ajudamos marcas a encontrarem seu lugar no mercado. Posicionamento, análise competitiva, arquitetura de mensagem e planejamento de go-to-market.",
    tags: ["Posicionamento", "Pesquisa", "Mensagem"],
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-background py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${inView ? "visible" : ""} mb-16 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            O Que Fazemos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-5">
            Serviços feitos para{" "}
            <span className="text-accent">ambição</span>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
            Serviços criativos completos para marcas sérias em se destacar
            num mundo saturado.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, description, tags }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} group bg-card border border-border rounded-2xl p-8 hover:border-accent/30 hover:bg-card-hover transition-all duration-300 cursor-default`}
            >
              {/* Icon box */}
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border-light flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                <Icon size={20} className="text-muted group-hover:text-accent transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider bg-secondary border border-border text-muted px-3 py-1.5 rounded-full font-medium group-hover:border-accent/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
