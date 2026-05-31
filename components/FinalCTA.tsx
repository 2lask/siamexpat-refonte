"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MagneticButton } from "@/components/ui/magnetic-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
  .finalcta-giant-text {
    /* Mobile: stacked SIAM / EXPAT — each word can run much bigger */
    font-size: clamp(110px, 26vw, 170px);
    line-height: 0.82;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: transparent;
    -webkit-text-stroke: 1px color-mix(in oklch, var(--primary) 32%, transparent);
    background: linear-gradient(
      180deg,
      var(--primary) 0%,
      color-mix(in oklch, var(--primary) 70%, transparent) 55%,
      color-mix(in oklch, var(--primary) 18%, transparent) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    filter: drop-shadow(0 0 60px color-mix(in oklch, var(--primary) 22%, transparent));
  }

  @media (min-width: 768px) {
    .finalcta-giant-text {
      /* Desktop: single-line wordmark */
      font-size: clamp(140px, 13vw, 220px);
    }
  }

  .finalcta-aurora {
    background: radial-gradient(
      circle at 50% 60%,
      color-mix(in oklch, var(--primary) 28%, transparent) 0%,
      color-mix(in oklch, var(--primary) 10%, transparent) 40%,
      transparent 70%
    );
  }

  .finalcta-grid {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, color-mix(in oklch, var(--background) 6%, transparent) 1px, transparent 1px),
      linear-gradient(to bottom, color-mix(in oklch, var(--background) 6%, transparent) 1px, transparent 1px);
    mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  }

  .finalcta-title-glow {
    background: linear-gradient(
      180deg,
      var(--background) 0%,
      color-mix(in oklch, var(--background) 65%, transparent) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 20px color-mix(in oklch, var(--background) 18%, transparent));
  }

  @keyframes finalcta-breathe {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    50%      { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
  }
  .animate-finalcta-breathe { animation: finalcta-breathe 9s ease-in-out infinite; }
`;

export default function FinalCTA() {
  const wrapperRef = useRef<HTMLElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantRef.current,
        { y: 80, scale: 0.92, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, paragraphRef.current, ctaRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <section
        ref={wrapperRef}
        className="relative overflow-hidden bg-foreground pt-28 pb-44 text-background md:py-40"
      >
        <div
          className="finalcta-aurora pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 animate-finalcta-breathe rounded-full blur-3xl"
          aria-hidden
        />
        <div className="finalcta-grid pointer-events-none absolute inset-0" aria-hidden />

        <div
          ref={giantRef}
          className="finalcta-giant-text pointer-events-none absolute inset-x-0 bottom-[-3%] select-none text-center md:whitespace-nowrap"
          aria-hidden
        >
          <span className="block md:inline">SIAM</span>
          <span className="block md:ml-[0.2em] md:inline">EXPAT</span>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2
            ref={headingRef}
            className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl"
          >
            <span className="finalcta-title-glow block">Tu ne prends pas un risque.</span>
            <span className="block text-primary">Tu prends le contrôle.</span>
          </h2>

          <p
            ref={paragraphRef}
            className="mt-6 text-base leading-relaxed text-background/75 md:text-lg"
          >
            Changer de pays, c'est pas juste partir. C'est repenser ta vie.
            Et cette formation, c'est l'épaule qu'on aurait voulu avoir — on te la tend.
          </p>

          <div ref={ctaRef} className="mt-10">
            <MagneticButton
              as="a"
              href="#offres"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[0_20px_50px_-12px_color-mix(in_oklch,var(--primary)_45%,transparent)] transition-colors hover:bg-primary/90"
            >
              Je rejoins la formation maintenant
              <span>→</span>
            </MagneticButton>

            <p className="mt-5 text-xs uppercase tracking-wider text-background/55">
              Accès immédiat · Accès à vie
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
