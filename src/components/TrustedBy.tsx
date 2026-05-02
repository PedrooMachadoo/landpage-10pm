"use client"

import Image from "next/image"
import { Sparkles } from "@/components/ui/sparkles"
import { useInView } from "@/hooks/useInView"

// ── Client logos from public/client/ ─────────────────────────────────────────

const clients = [
  { src: "/client/logo bboom.svg",   alt: "Bboom 1",   w: 120 },
  { src: "/client/logo bboom 2.svg", alt: "Bboom 2",   w: 120 },
  { src: "/client/sapia 1.svg",      alt: "Sapia 1",   w: 100 },
  { src: "/client/sapia 2.svg",      alt: "Sapia 2",   w: 72  },
]

// ── Component ──────────────────────────────────────────────────────────────────

export default function TrustedBy() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-background"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">
        {/* Headline */}
        <div
          className="text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p className="text-3xl md:text-4xl font-bold text-primary leading-snug">
            <span className="text-accent">Quem não quis mais esperar.</span>
            <br />
            <span className="text-foreground/70">Do briefing ao ar. Em dias, não meses.</span>
          </p>
        </div>

        {/* Logos */}
        <div
          className="mt-14 flex items-center justify-center gap-16 flex-wrap"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "150ms",
          }}
        >
          {clients.map(({ src, alt, w }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              width={w * 2}
              height={60}
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.55 }}
            />
          ))}
        </div>
      </div>

      {/* Sparkles horizon */}
      <div className="relative -mt-20 h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        {/* Radial glow */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#4361ee,transparent_70%)] before:opacity-30" />

        {/* Curved horizon — bg matches FAQ's bg-secondary */}
        <div
          className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/10"
          style={{ background: "#111111" }}
        />

        {/* Sparkle particles */}
        <Sparkles
          density={400}
          speed={0.6}
          color="#4361ee"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>

      {/* Fade into FAQ's bg-secondary */}
      <div
        className="h-16 w-full"
        style={{ background: "linear-gradient(to bottom, #0a0a0a, #111111)" }}
      />
    </section>
  )
}
