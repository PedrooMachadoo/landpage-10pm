"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import IsoLevelWarp from "@/components/ui/isometric-wave-grid-background";

const navLinks = [
  { label: "Trabalhos", href: "#work" },
  { label: "Serviços", href: "#services" },
  { label: "Processo", href: "#process" },
  { label: "Time", href: "#team" },
  { label: "Contato", href: "#contact" },
];

const stats = [
  { value: "8+", label: "Anos" },
  { value: "120+", label: "Marcas" },
  { value: "94%", label: "Retenção" },
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Wave grid background */}
        <IsoLevelWarp
          color="67, 97, 238"
          speed={1.2}
          density={45}
        />

        {/* Content — single column, centered */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Estúdio Criativo — Est. 2016
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Criamos Marcas
              <br />
              <span className="text-accent">Que Não</span>
              <br />
              Dormem.
            </h1>

            <p className="text-base text-muted leading-relaxed mb-10 max-w-lg font-normal">
              Estúdio criativo premium que desenvolve identidades de marca,
              experiências digitais e design de alto impacto para empresas
              que se recusam a ser comuns.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300 group cursor-pointer"
              >
                Ver Nossos Trabalhos
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent/50 text-primary text-sm font-medium px-7 py-4 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/5"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-10 pt-8 border-t border-border/50 w-full">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-xs text-muted mt-0.5 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
