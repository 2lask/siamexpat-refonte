"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-orange-matte {
      background: linear-gradient(180deg, #e05d38 0%, color-mix(in srgb, #e05d38 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px rgba(224, 93, 56, 0.25))
          drop-shadow(0px 2px 4px rgba(224, 93, 56, 0.20));
  }

  .text-card-warm-matte {
      background: linear-gradient(180deg, #333333 0%, #e05d38 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(224, 93, 56, 0.20))
          drop-shadow(0px 4px 8px rgba(51, 51, 51, 0.18));
  }

  .transparent-card {
      background: transparent;
      box-shadow: none;
      border: 1px solid transparent;
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(224, 93, 56, 0.06) 0%, transparent 40%);
      mix-blend-mode: multiply; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 240, 0.85) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(224, 93, 56, 0.22),
          0 25px 50px -12px rgba(51, 51, 51, 0.25),
          inset 0 1px 1px rgba(255,255,255,1),
          inset 0 -1px 1px rgba(224, 93, 56, 0.08);
  }

  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #FFE9DD 100%);
      color: #0F172A;
      box-shadow:
          0 0 0 1px rgba(0,0,0,0.05),
          0 2px 4px rgba(0,0,0,0.1),
          0 12px 24px -4px rgba(224, 93, 56, 0.25),
          inset 0 1px 1px rgba(255,255,255,1),
          inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow:
          0 0 0 1px rgba(0,0,0,0.05),
          0 6px 12px -2px rgba(0,0,0,0.15),
          0 20px 32px -6px rgba(224, 93, 56, 0.32),
          inset 0 1px 1px rgba(255,255,255,1),
          inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #FFE9DD 0%, #FED4BD 100%);
      box-shadow:
          0 0 0 1px rgba(0,0,0,0.1),
          0 1px 2px rgba(0,0,0,0.1),
          inset 0 3px 6px rgba(0,0,0,0.1),
          inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #ed7250 0%, #c64a26 100%);
      color: #FFFFFF;
      box-shadow:
          0 0 0 1px rgba(184, 72, 42, 0.30),
          0 2px 4px rgba(224, 93, 56, 0.20),
          0 12px 24px -4px rgba(224, 93, 56, 0.35),
          inset 0 1px 1px rgba(255, 255, 255, 0.28),
          inset 0 -3px 6px rgba(120, 40, 18, 0.35);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #f08363 0%, #d05530 100%);
      box-shadow:
          0 0 0 1px rgba(184, 72, 42, 0.35),
          0 6px 12px -2px rgba(224, 93, 56, 0.25),
          0 20px 32px -6px rgba(224, 93, 56, 0.45),
          inset 0 1px 1px rgba(255, 255, 255, 0.32),
          inset 0 -3px 6px rgba(120, 40, 18, 0.35);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #c64a26;
      box-shadow:
          0 0 0 1px rgba(184, 72, 42, 0.40),
          inset 0 3px 8px rgba(120, 40, 18, 0.45),
          inset 0 0 0 1px rgba(120, 40, 18, 0.20);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

interface CtaButton {
  topLabel: string;
  mainLabel: string;
  href?: string;
}

interface FloatingBadge {
  label: string;
  sublabel: string;
  emoji?: string;
}

interface IphoneMockup {
  topLabel: string;
  mainLabel: string;
  avatarInitials: string;
}

export interface CinematicHeroProps
  extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  floatingBadges?: [FloatingBadge, FloatingBadge];
  iphoneMockup?: IphoneMockup;
}

const DEFAULT_PRIMARY_CTA: CtaButton = {
  topLabel: "ACCÈS IMMÉDIAT",
  mainLabel: "Voir les offres",
  href: "#offres",
};

const DEFAULT_SECONDARY_CTA: CtaButton = {
  topLabel: "AVANT DE TE DÉCIDER",
  mainLabel: "Voir les modules en détail",
  href: "/programme",
};

const DEFAULT_BADGES: [FloatingBadge, FloatingBadge] = [
  {
    label: "Un nouveau départ",
    sublabel: "Plus libre, plus aligné",
    emoji: "🌅",
  },
  {
    label: "Du sens, du temps",
    sublabel: "Un rythme qui te ressemble",
    emoji: "⏳",
  },
];

const DEFAULT_IPHONE: IphoneMockup = {
  topLabel: "MODULE 3",
  mainLabel: "Visas et séjour",
  avatarInitials: "SE",
};

export function CinematicHero({
  brandName = "Le déclic",
  tagline1 = "Le plan exact.",
  tagline2 = "pour t'expatrier sans stress.",
  cardHeading = "Une méthode claire, humaine et concrète.",
  cardDescription = (
    <>
      <span className="font-semibold text-foreground">
        8 modules ultra-concrets
      </span>{" "}
      pour construire ta nouvelle vie en Thaïlande, étape par étape. Du visa
      long séjour à la fiscalité, de l'école des enfants à ta santé, du permis
      thaï à ton entreprise — chaque module reprend ce qu'on a{" "}
      <span className="font-semibold text-foreground">
        appris, vécu et surmonté
      </span>{" "}
      sur place. Pas un cours théorique. Pas une jolie carte postale. Une
      formation humaine, concrète, conçue pour t'aider à poser tes valises sans
      galérer.
    </>
  ),
  metricValue = 8,
  metricLabel = "MODULES",
  ctaHeading = "Chaque pas compte. On t'aide à faire les bons.",
  ctaDescription = "Tu sauras exactement où tu vas, pourquoi tu y vas et comment y arriver. Un chemin balisé, testé, validé, et un couple qui a fait les erreurs et cherché les réponses avant toi. Accès immédiat, accès à vie, et trois rythmes de paiement pour avancer à ton tempo.",
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
  floatingBadges = DEFAULT_BADGES,
  iphoneMockup = DEFAULT_IPHONE,
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20,
      });
      gsap.set(".text-days", {
        autoAlpha: 1,
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      // On mobile, surface card text + iPhone widgets immediately so users see
      // every piece of content during the scrub (desktop still gets the staggered reveal).
      gsap.set(
        [
          ".card-left-text",
          ".card-right-text",
          ".mockup-scroll-wrapper",
          ".floating-badge",
          ".phone-widget",
        ],
        { autoAlpha: isMobile ? 1 : 0 },
      );
      gsap.set(".cta-wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        filter: "blur(30px)",
      });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "expo.out",
        })
        .to(
          ".text-days",
          {
            duration: 1.4,
            clipPath: "inset(0 0% 0 0)",
            ease: "power4.inOut",
          },
          "-=1.0",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // Mobile pin is much shorter so the section doesn't overwhelm small screens
          end: isMobile ? "+=2200" : "+=4500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          [".hero-text-wrapper", ".bg-grid-theme"],
          {
            scale: 1.15,
            filter: "blur(20px)",
            opacity: 0.2,
            ease: "power2.inOut",
            duration: 2,
          },
          0,
        )
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .fromTo(
          ".mockup-scroll-wrapper",
          {
            y: 300,
            z: -500,
            rotationX: 50,
            rotationY: -30,
            autoAlpha: 0,
            scale: 0.6,
          },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.5,
          },
          "-=0.8",
        )
        .fromTo(
          ".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            duration: 1.5,
          },
          "-=1.5",
        )
        .to(
          ".progress-ring",
          { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" },
          "-=1.2",
        )
        .to(
          ".counter-val",
          {
            innerHTML: metricValue,
            snap: { innerHTML: 1 },
            duration: 2,
            ease: "expo.out",
          },
          "-=2.0",
        )
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(1.5)",
            duration: 1.5,
            stagger: 0.2,
          },
          "-=2.0",
        )
        .fromTo(
          ".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 },
          "-=1.5",
        )
        .fromTo(
          ".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.8 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 },
          "<",
        )
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to(
          [
            ".mockup-scroll-wrapper",
            ".floating-badge",
            ".card-left-text",
            ".card-right-text",
          ],
          {
            scale: 0.9,
            y: -40,
            z: -200,
            autoAlpha: 0,
            ease: "power3.in",
            duration: 1.2,
            stagger: 0.05,
          },
        )
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback",
        )
        .to(
          ".cta-wrapper",
          {
            scale: 1,
            filter: "blur(0px)",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback",
        )
        .to(".main-card", {
          y: -window.innerHeight - 300,
          ease: "power3.in",
          duration: 1.5,
        });
    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background font-sans text-foreground antialiased",
        className,
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div
        className="bg-grid-theme pointer-events-none absolute inset-0 z-0 opacity-50"
        aria-hidden="true"
      />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div
        className="hero-text-wrapper transform-style-3d absolute z-10 flex w-screen flex-col items-center justify-center px-4 text-center will-change-transform"
      >
        <h1 className="text-track gsap-reveal text-3d-matte mb-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-[6rem]">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-orange-matte font-serif text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl lg:text-[6rem]">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
      <div className="cta-wrapper gsap-reveal pointer-events-auto absolute z-30 flex w-screen flex-col items-center justify-center px-4 text-center will-change-transform">
        <h2 className="text-orange-matte mb-5 font-serif text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
          {ctaHeading}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg md:text-xl">
          {ctaDescription}
        </p>
        <div className="flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:w-auto sm:flex-row sm:gap-6">
          <a
            href={primaryCta.href ?? "#"}
            aria-label={primaryCta.mainLabel}
            className="btn-modern-light group flex items-center justify-center gap-3 rounded-[1.25rem] px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-8 sm:py-4"
          >
            <svg
              className="h-6 w-6 shrink-0 text-[#e05d38] transition-transform group-hover:translate-x-1 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="text-left">
              <div className="mb-[-2px] text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                {primaryCta.topLabel}
              </div>
              <div className="text-base font-bold leading-tight tracking-tight sm:text-xl sm:leading-none">
                {primaryCta.mainLabel}
              </div>
            </div>
          </a>
          <a
            href={secondaryCta.href ?? "#"}
            aria-label={secondaryCta.mainLabel}
            className="btn-modern-dark group flex items-center justify-center gap-3 rounded-[1.25rem] px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background sm:px-8 sm:py-4"
          >
            <svg
              className="h-6 w-6 shrink-0 text-white transition-transform group-hover:translate-x-1 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="text-left">
              <div className="mb-[-2px] text-[10px] font-bold uppercase tracking-wider text-white/80">
                {secondaryCta.topLabel}
              </div>
              <div className="text-base font-bold leading-tight tracking-tight sm:text-xl sm:leading-none">
                {secondaryCta.mainLabel}
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Warm Card */}
      <div
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          // Mobile: card grows with content (min-h, overflow-visible) so the
          // full description is never clipped. Desktop keeps fixed dimensions
          // for the GSAP morph animation.
          className="main-card transparent-card gsap-reveal pointer-events-auto relative flex min-h-[92vh] w-[92vw] items-center justify-center overflow-visible rounded-[32px] md:h-[85vh] md:w-[85vw] md:overflow-hidden md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between px-4 py-4 sm:justify-evenly sm:py-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-12 lg:py-0">
            {/* TOP (Mobile) / RIGHT (Desktop): BRAND NAME */}
            <div className="card-right-text gsap-reveal order-1 z-20 flex w-full justify-center lg:order-3 lg:mt-0 lg:justify-end">
              <h2 className="text-card-warm-matte font-serif text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-[6rem] lg:text-[8rem]">
                {brandName}
              </h2>
            </div>

            {/* MIDDLE: iPhone Mockup */}
            <div
              className="mockup-scroll-wrapper relative z-10 order-2 flex h-[240px] w-full items-center justify-center sm:h-[380px] lg:order-2 lg:h-[600px]"
              style={{ perspective: "1000px" }}
            >
              <div className="relative flex h-full w-full scale-[0.4] items-center justify-center transform sm:scale-[0.65] md:scale-[0.85] lg:scale-100">
                <div
                  ref={mockupRef}
                  className="iphone-bezel transform-style-3d relative flex h-[580px] w-[280px] flex-col rounded-[3rem] will-change-transform"
                >
                  {/* Physical Hardware Buttons */}
                  <div
                    className="hardware-btn absolute -left-[3px] top-[120px] z-0 h-[25px] w-[3px] rounded-l-md"
                    aria-hidden="true"
                  />
                  <div
                    className="hardware-btn absolute -left-[3px] top-[160px] z-0 h-[45px] w-[3px] rounded-l-md"
                    aria-hidden="true"
                  />
                  <div
                    className="hardware-btn absolute -left-[3px] top-[220px] z-0 h-[45px] w-[3px] rounded-l-md"
                    aria-hidden="true"
                  />
                  <div
                    className="hardware-btn absolute -right-[3px] top-[170px] z-0 h-[70px] w-[3px] scale-x-[-1] rounded-r-md"
                    aria-hidden="true"
                  />

                  {/* Inner Screen */}
                  <div
                    className="absolute inset-[7px] z-10 overflow-hidden rounded-[2.5rem] bg-[#0a0604] text-white shadow-[inset_0_0_15px_rgba(0,0,0,1)]"
                  >
                    <div
                      className="screen-glare pointer-events-none absolute inset-0 z-40"
                      aria-hidden="true"
                    />

                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-[5px] z-50 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e05d38] shadow-[0_0_8px_rgba(224,93,56,0.85)]" />
                    </div>

                    {/* App Interface */}
                    <div className="relative flex h-full w-full flex-col px-5 pb-8 pt-12">
                      <div className="phone-widget mb-8 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            {iphoneMockup.topLabel}
                          </span>
                          <span className="font-serif text-xl font-bold tracking-tight text-white drop-shadow-md">
                            {iphoneMockup.mainLabel}
                          </span>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-neutral-200 shadow-lg shadow-black/50">
                          {iphoneMockup.avatarInitials}
                        </div>
                      </div>

                      <div className="phone-widget relative mx-auto mb-8 flex h-44 w-44 items-center justify-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg
                          className="absolute inset-0 h-full w-full"
                          aria-hidden="true"
                        >
                          <circle
                            cx="88"
                            cy="88"
                            r="64"
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="12"
                          />
                          <circle
                            className="progress-ring"
                            cx="88"
                            cy="88"
                            r="64"
                            fill="none"
                            stroke="#e05d38"
                            strokeWidth="12"
                          />
                        </svg>
                        <div className="z-10 flex flex-col items-center text-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">
                            0
                          </span>
                          <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#f5a575]">
                            {metricLabel}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-gradient-to-br from-orange-500/20 to-orange-600/5 shadow-inner">
                            <svg
                              className="h-4 w-4 text-orange-400 drop-shadow-md"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="mb-2 h-2 w-20 rounded-full bg-neutral-300 shadow-inner" />
                            <div className="h-1.5 w-12 rounded-full bg-neutral-600 shadow-inner" />
                          </div>
                        </div>
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/25 bg-gradient-to-br from-amber-500/20 to-amber-600/5 shadow-inner">
                            <svg
                              className="h-4 w-4 text-amber-400 drop-shadow-md"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="mb-2 h-2 w-16 rounded-full bg-neutral-300 shadow-inner" />
                            <div className="h-1.5 w-24 rounded-full bg-neutral-600 shadow-inner" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <div className="floating-badge floating-ui-badge absolute left-[-15px] top-6 z-30 flex items-center gap-3 rounded-xl p-3 lg:left-[-80px] lg:top-12 lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-b from-primary/15 to-primary/5 shadow-inner lg:h-10 lg:w-10">
                    <span
                      className="text-base drop-shadow-sm lg:text-xl"
                      aria-hidden="true"
                    >
                      {floatingBadges[0].emoji ?? "✅"}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-foreground lg:text-sm">
                      {floatingBadges[0].label}
                    </p>
                    <p className="text-[10px] font-medium text-muted-foreground lg:text-xs">
                      {floatingBadges[0].sublabel}
                    </p>
                  </div>
                </div>

                <div className="floating-badge floating-ui-badge absolute bottom-12 right-[-15px] z-30 flex items-center gap-3 rounded-xl p-3 lg:bottom-20 lg:right-[-80px] lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-b from-primary/15 to-primary/5 shadow-inner lg:h-10 lg:w-10">
                    <span
                      className="text-base drop-shadow-sm lg:text-lg"
                      aria-hidden="true"
                    >
                      {floatingBadges[1].emoji ?? "🏫"}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-foreground lg:text-sm">
                      {floatingBadges[1].label}
                    </p>
                    <p className="text-[10px] font-medium text-muted-foreground lg:text-xs">
                      {floatingBadges[1].sublabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM (Mobile) / LEFT (Desktop): Card Heading + Description */}
            <div className="card-left-text gsap-reveal order-3 z-20 flex w-full flex-col justify-center px-2 text-center lg:order-1 lg:max-w-none lg:px-0 lg:text-left">
              <h3 className="mb-2 font-serif text-base font-bold tracking-tight text-foreground sm:mb-3 sm:text-2xl md:text-3xl lg:mb-5 lg:text-4xl">
                {cardHeading}
              </h3>
              <p className="mx-auto max-w-sm text-[11px] font-normal leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed md:text-base lg:mx-0 lg:max-w-none lg:text-lg">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
