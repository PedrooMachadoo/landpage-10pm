"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [progress, setProgress] = useState(0); // 0 → 1
  const [unlocked, setUnlocked] = useState(false);
  const touchStartY = useRef(0);

  // Header background once user has scrolled past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-lock cross-fade
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Re-lock when scrolling back to the top
      if (unlocked && e.deltaY < 0 && window.scrollY <= 5) {
        setUnlocked(false);
        e.preventDefault();
        return;
      }

      if (!unlocked) {
        e.preventDefault();
        const delta = e.deltaY * 0.0012;
        setProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) setUnlocked(true);
          return next;
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return;
      const deltaY = touchStartY.current - e.touches[0].clientY;

      if (unlocked && deltaY < -30 && window.scrollY <= 5) {
        setUnlocked(false);
        e.preventDefault();
        return;
      }

      if (!unlocked) {
        e.preventDefault();
        const delta = deltaY * 0.006;
        setProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) setUnlocked(true);
          return next;
        });
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    const handleScroll = () => {
      if (!unlocked) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [unlocked]);

  // Derived visual values
  const sloganProgress = Math.max(0, (progress - 0.55) / 0.45);
  const subtitleProgress = Math.max(0, (progress - 0.8) / 0.2);
  const hintOpacity = Math.max(0, 1 - progress * 2.5);

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
          <a href="#" className="text-xl font-bold tracking-tight text-primary select-none">
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
            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
          >
            Falar com a 10pm
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
              Falar com a 10pm
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero — Scroll-locked cross-fade 10am → 10pm ─── */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* ── 10AM layer — fades out ── */}
        <div
          className="absolute inset-0 transition-opacity duration-100 ease-out"
          style={{ opacity: 1 - progress }}
        >
          {/* Image wrapper with gentle wind/breath */}
          <div className="absolute inset-0 hero-am-wind">
            <Image
              src="/hero/10am.png"
              alt="10am"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Sun-ray sweep overlay */}
          <div
            className="hero-am-sunray absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at center, rgba(255,210,150,0.25) 0%, transparent 65%)",
            }}
          />

          {/* Floating dust particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { left: "8%",  top: "75%", size: 3, delay: "0s",   dur: "11s" },
              { left: "22%", top: "60%", size: 2, delay: "2.5s", dur: "14s" },
              { left: "38%", top: "85%", size: 3, delay: "1s",   dur: "12s" },
              { left: "52%", top: "70%", size: 2, delay: "4s",   dur: "13s" },
              { left: "68%", top: "82%", size: 3, delay: "0.7s", dur: "15s" },
              { left: "82%", top: "65%", size: 2, delay: "3s",   dur: "11s" },
              { left: "92%", top: "78%", size: 3, delay: "5s",   dur: "13s" },
              { left: "15%", top: "45%", size: 2, delay: "6s",   dur: "16s" },
              { left: "75%", top: "40%", size: 2, delay: "2s",   dur: "14s" },
            ].map((p, i) => (
              <span
                key={i}
                className="hero-am-particle absolute rounded-full bg-white/70"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  animationDelay: p.delay,
                  animationDuration: p.dur,
                  boxShadow: "0 0 4px rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── 10PM layer — fades in ── */}
        <div
          className="absolute inset-0 transition-opacity duration-100 ease-out"
          style={{ opacity: progress }}
        >
          {/* Image wrapper with neon flicker */}
          <div className="absolute inset-0 hero-pm-flicker">
            <Image
              src="/hero/10pm.png"
              alt="10pm"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Pulsing blue glow #1 — top-left light source */}
          <div
            className="hero-pm-glow absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 35% 30% at 25% 35%, rgba(67,97,238,0.55) 0%, transparent 70%)",
            }}
          />

          {/* Pulsing blue glow #2 — bottom-right light source (offset timing) */}
          <div
            className="hero-pm-glow absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 30% 25% at 75% 65%, rgba(108,130,245,0.45) 0%, transparent 70%)",
              animationDelay: "2.2s",
            }}
          />

          {/* Violet accent glow — center, slower */}
          <div
            className="hero-pm-glow absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 65%)",
              animationDelay: "1s",
              animationDuration: "7s",
            }}
          />

          {/* Quick spark — rare bright flash */}
          <div
            className="hero-pm-spark absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse 12% 10% at 60% 30%, rgba(255,255,255,0.4) 0%, transparent 80%)",
            }}
          />
        </div>

        {/* Darkening overlay — night deepens */}
        <div
          className="absolute inset-0 transition-opacity duration-100"
          style={{ background: `rgba(0,0,0,${0.15 + progress * 0.35})` }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

          {/* Time pill — morphs 10:00 AM → 10:00 PM */}
          <div className="relative mb-10 h-6 flex items-center">
            <span
              className="absolute left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] font-mono font-semibold text-primary/60 whitespace-nowrap transition-opacity duration-150"
              style={{ opacity: 1 - progress }}
            >
              · 10:00 AM ·
            </span>
            <span
              className="absolute left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] font-mono font-semibold text-accent whitespace-nowrap transition-opacity duration-150"
              style={{ opacity: progress }}
            >
              · 10:00 PM ·
            </span>
          </div>

          {/* Pre-slogan teaser — visible while transitioning */}
          <p
            className="text-base sm:text-lg text-primary/70 font-light max-w-xl tracking-wide transition-opacity duration-150"
            style={{ opacity: Math.max(0, 1 - progress * 1.3) }}
          >
            O mundo trabalha durante o dia.
          </p>

          {/* Slogan — emerges as night completes */}
          <h1
            className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] tracking-tight text-primary max-w-4xl transition-all duration-200 ease-out"
            style={{
              opacity: sloganProgress,
              transform: `translateY(${(1 - sloganProgress) * 24}px)`,
            }}
          >
            Às <span className="text-accent">22h</span>,<br />
            tudo começa.
          </h1>

          {/* Subtitle — final reveal */}
          <p
            className="absolute bottom-32 text-sm sm:text-base text-primary/60 max-w-md font-light tracking-wide transition-all duration-200 ease-out"
            style={{
              opacity: subtitleProgress,
              transform: `translateY(${(1 - subtitleProgress) * 16}px)`,
            }}
          >
            Onde o dia termina, a 10pm começa.
          </p>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-200"
          style={{ opacity: hintOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-medium">
            role para a noite
          </span>
          <ChevronDown size={16} className="text-primary/60 animate-bounce" />
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
          <div
            className="h-full bg-accent transition-[width] duration-100 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Bottom fade — só aparece quando unlocked, prepara próxima seção */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10 transition-opacity duration-500"
          style={{
            opacity: unlocked ? 1 : 0,
            background: "linear-gradient(to top, #000000 0%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
