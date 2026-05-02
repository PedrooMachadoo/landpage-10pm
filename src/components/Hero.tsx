"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, Timer, Wallet, Layers } from "lucide-react";
import IsoLevelWarp from "@/components/ui/isometric-wave-grid-background";

const navLinks = [
  { label: "Trabalhos", href: "#work" },
  { label: "Serviços", href: "#services" },
  { label: "Processo", href: "#process" },
  { label: "Time", href: "#team" },
  { label: "Contato", href: "#contact" },
];


export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Navigation ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-5">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-primary select-none"
          >
            10<span className="text-accent">PM</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group cursor-pointer"
          >
            Iniciar Projeto
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          className={`md:hidden bg-secondary border-t border-border overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted hover:text-primary transition-colors py-3 border-b border-border last:border-0 font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-sm bg-accent text-white font-semibold px-5 py-3 text-center rounded-full"
            >
              Iniciar Projeto
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-black min-h-screen flex flex-col" style={{ backgroundColor: '#000000' }}>
        {/* Wave grid background */}
        <IsoLevelWarp
          color="67, 97, 238"
          speed={1.2}
          density={45}
        />

        {/* Hero content — centered vertically */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-8">
          <div className="flex flex-col items-center text-center max-w-3xl">

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Tecnologia de ponta.{" "}
              <span className="text-accent">Preço que faz sentido.</span>
            </h1>

            <p className="text-base text-muted leading-relaxed mb-10 max-w-md font-normal">
              Soluções digitais para quem tem um negócio pra fazer crescer.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300 group cursor-pointer"
              >
                Quero conhecer as soluções
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent/50 text-primary text-sm font-medium px-7 py-4 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/5"
              >
                Falar com especialista
              </a>
            </div>

            {/* Scroll hint */}
            <div className="mt-14 flex flex-col items-center gap-1.5 opacity-25">
              <ChevronDown size={18} className="text-primary animate-bounce" />
            </div>
          </div>
        </div>

        {/* ── Preview cards — peek da próxima seção ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Timer, badge: "Ágil", title: "Você lança enquanto a concorrência ainda planeja." },
              { icon: Wallet, badge: "Acessível", title: "Time completo pelo preço de um freelancer." },
              { icon: Layers, badge: "Completo", title: "Da ideia ao produto. Sem terceirizar partes." },
            ].map(({ icon: Icon, badge, title }) => (
              <div
                key={badge}
                className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-6 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-accent/60 block mb-1">{badge}</span>
                  <p className="text-sm font-semibold text-primary leading-snug">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade — cards dissolvem no escuro */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
          style={{ background: 'linear-gradient(to top, #000000 0%, transparent 100%)' }}
        />
      </section>
    </>
  );
}
