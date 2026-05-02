'use client';

import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { ImageAccordion } from '@/components/ui/interactive-image-accordion';

const cases = [
  {
    id: 1,
    category: 'Plataforma Web · SaaS',
    title: 'Plataforma de gestão e descoberta de eventos',
    imageUrl: 'https://bboom.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop-rubber.2a3e732c.png&w=3840&q=75',
    link: 'https://bboom.app/',
  },
  {
    id: 2,
    category: 'Plataforma Web · EdTech',
    title: 'EduProf — plataforma educacional para professores com IA',
    imageUrl: '/cases/sapia.jpg',
    link: 'https://skirr-revel-41816661.figma.site',
  },
  {
    id: 3,
    category: 'App Mobile',
    title: 'Bboom — app de descoberta e compra de eventos',
    imageUrl: 'https://bboom.app/assets/phone-hero.png',
    link: 'https://bboom.app/',
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
            <ImageAccordion items={cases} defaultActive={1} />
          </div>

        </div>
      </div>
    </section>
  );
}
