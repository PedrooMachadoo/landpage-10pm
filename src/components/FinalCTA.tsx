"use client";

import { ArrowRight, X, Globe, Share2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const footerLinks = {
  Estúdio: ["Sobre", "Trabalhos", "Serviços", "Processo"],
  Conecte: ["Twitter", "Instagram", "LinkedIn", "Dribbble"],
  Legal: ["Política de Privacidade", "Termos de Uso", "Política de Cookies"],
};

export default function FinalCTA() {
  const { ref, inView } = useInView(0.1);

  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      {/* CTA Section */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="relative overflow-hidden py-28 lg:py-40 border-b border-border"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className={`reveal ${inView ? "visible" : ""} flex flex-col items-center gap-8`}>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Comece agora
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-tight tracking-tight max-w-3xl">
              Chega de{" "}
              <span className="text-accent">improvisar.</span>
            </h2>

            <p className="text-muted text-base max-w-md leading-relaxed">
              Comece hoje. Sem burocracia, sem surpresa.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="mailto:hello@10pm.studio"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 group cursor-pointer"
              >
                Quero começar agora
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </a>
              <a
                href="mailto:hello@10pm.studio"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent/50 text-primary text-sm font-medium px-8 py-4 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/5"
              >
                Falar com especialista
              </a>
            </div>
            <p className="text-muted/60 text-xs mt-2">
              Sem compromisso. Fale com um especialista primeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#" className="text-2xl font-bold text-primary tracking-tight">
              10<span className="text-accent">PM</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A 10pm conecta MEIs e pequenas empresas às melhores soluções
              digitais do mercado. Ágil, acessível e pronto pra rodar.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: X, label: "X (Twitter)" },
                { icon: Share2, label: "Instagram" },
                { icon: Globe, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted font-semibold">
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()} 10 PM Studio. Todos os direitos reservados.
          </p>
          <p className="text-muted/50 text-[11px]">
            Feito para quem não tem tempo a perder.
          </p>
        </div>
      </div>
    </footer>
  );
}
