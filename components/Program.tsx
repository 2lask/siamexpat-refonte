import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { MobileProgram } from "@/components/MobileProgram";

export default function Program() {
  return (
    <section id="programme" className="relative">
      {/* Mobile (<768px): all content stacked vertically, no GSAP */}
      <div className="md:hidden">
        <MobileProgram />
      </div>
      {/* Desktop (>=768px): cinematic GSAP scroll experience */}
      <div className="hidden md:block">
        <CinematicHero />
      </div>
    </section>
  );
}
