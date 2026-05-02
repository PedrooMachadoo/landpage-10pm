import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudy />
      <Services />
      <Process />
      <Cases />
      <TrustedBy />
      <FAQ />
      <Team />
      <FinalCTA />
    </main>
  );
}
