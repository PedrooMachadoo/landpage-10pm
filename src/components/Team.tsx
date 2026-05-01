"use client";

import Image from "next/image";
import { X, Globe } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const members = [
  {
    name: "Rafael Moura",
    role: "Diretor Criativo",
    bio: "15 anos moldando narrativas de marca para empresas globais.",
    img: "https://picsum.photos/seed/rafael-moura/400/500",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Isabela Torres",
    role: "Designer Sênior",
    bio: "Obcecada com o espaço onde função encontra beleza.",
    img: "https://picsum.photos/seed/isabela-torres/400/500",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Lucas Andrade",
    role: "Diretor de Motion",
    bio: "Especialista em movimento que dá pulsação às marcas.",
    img: "https://picsum.photos/seed/lucas-andrade/400/500",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Camila Reis",
    role: "Estrategista de Marca",
    bio: "Transforma posicionamento vago em clareza afiada.",
    img: "https://picsum.photos/seed/camila-reis/400/500",
    twitter: "#",
    linkedin: "#",
  },
];

export default function Team() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="team"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-secondary py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${inView ? "visible" : ""} mb-16 text-center`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            O Time
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
            Nosso time
          </h2>
          <p className="text-muted text-base">
            Especialistas que criaram produtos para milhões de usuários
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map(({ name, role, bio, img, twitter, linkedin }, i) => (
            <div
              key={name}
              className={`reveal reveal-delay-${i + 1} ${inView ? "visible" : ""} group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300`}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-t-2xl">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />

                {/* Social overlay on hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={twitter}
                    aria-label={`${name} on X`}
                    className="w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <X size={14} />
                  </a>
                  <a
                    href={linkedin}
                    aria-label={`${name} on LinkedIn`}
                    className="w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <Globe size={14} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-primary text-base font-bold">{name}</p>
                <p className="text-muted text-xs mt-1 font-medium">{role}</p>
                <p className="text-muted/70 text-xs mt-2 leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
