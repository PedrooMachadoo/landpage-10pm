'use client';

import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { ImageAccordion } from '@/components/ui/interactive-image-accordion';

const cases = [
  {
    id: 1,
    category: 'Plataforma SaaS',
    title: 'Dashboard de gestão para rede de clínicas',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'App Mobile',
    title: 'App de agendamento e fidelidade',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'E-commerce',
    title: 'Loja digital do zero ao primeiro pedido',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Identidade Visual',
    title: 'Marca e sistema visual para startup',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Sistema Web',
    title: 'Automação de processos internos',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Cases() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-secondary py-28 lg:py-36 overflow-hidden"
    >
      {/* Bottom fade — Cases into Testimonials */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Left — text */}
          <div className={`reveal-soft ${inView ? 'visible' : ''} w-full lg:w-[340px] flex-shrink-0`}>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
              Cases
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-5">
              Ideias que viraram{' '}
              <span className="text-accent">produto real.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              Cada projeto começa com um problema. Veja como transformamos desafios em soluções que funcionam.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 group cursor-pointer"
            >
              Falar sobre o seu projeto
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Right — accordion */}
          <div className={`reveal-soft reveal-delay-2 ${inView ? 'visible' : ''} flex-1 min-w-0`}>
            <ImageAccordion items={cases} defaultActive={2} />
          </div>

        </div>
      </div>
    </section>
  );
}
