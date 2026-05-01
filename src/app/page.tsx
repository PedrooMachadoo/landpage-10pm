import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudy />
      <Clients />
      <Process />
      <Testimonials />
      <Team />
      <FinalCTA />
    </main>
  );
}
