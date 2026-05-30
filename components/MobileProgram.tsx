"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BADGES = [
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

const PHONE_CSS = `
  .mp-iphone {
    background: linear-gradient(145deg, #3d1a10 0%, #0d0604 100%);
    border: 1px solid rgba(245, 165, 117, 0.18);
    box-shadow:
      0 30px 70px -18px rgba(0, 0, 0, 0.55),
      0 12px 30px -10px rgba(224, 93, 56, 0.25),
      inset 0 1px 1px rgba(245, 165, 117, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
  }
  .mp-iphone-screen {
    background: #0a0604;
    box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.9);
  }
  .mp-glare {
    background: linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 45%);
  }
  .mp-hardware {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow: -2px 0 4px rgba(0,0,0,0.7), inset -1px 0 1px rgba(255,255,255,0.12), inset 1px 0 2px rgba(0,0,0,0.7);
  }
  .mp-floating-badge {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 245, 240, 0.88) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow:
      0 0 0 1px rgba(224, 93, 56, 0.22),
      0 20px 40px -10px rgba(51, 51, 51, 0.22),
      inset 0 1px 1px rgba(255,255,255,1);
  }
`;

export function MobileProgram() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-16">
      <style dangerouslySetInnerHTML={{ __html: PHONE_CSS }} />

      {/* Decorative blurs */}
      <div
        className="pointer-events-none absolute -top-32 right-[-25%] h-[380px] w-[380px] rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-25%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-md space-y-12">
        {/* ========= EYEBROW + TAGLINES ========= */}
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
            Le programme
          </p>
          <h2 className="mt-4 font-serif text-[2.75rem] font-bold leading-[1.04] tracking-tight text-foreground">
            Le plan exact.
          </h2>
          <h2 className="mt-1 font-serif text-[2.75rem] font-extrabold leading-[1.04] tracking-tighter text-primary">
            pour t&apos;expatrier
            <br />
            sans stress.
          </h2>
        </div>

        {/* ========= BRAND STAMP "LE DÉCLIC" ========= */}
        <div className="text-center">
          <h3 className="font-serif text-[3.5rem] font-black uppercase leading-none tracking-tighter text-primary drop-shadow-[0_10px_22px_rgba(224,93,56,0.4)]">
            Le déclic
          </h3>
        </div>

        {/* ========= STATIC iPHONE MOCKUP WITH FLOATING BADGES ========= */}
        <div
          className="relative mx-auto flex w-full max-w-[260px] justify-center pb-4 pt-2"
          style={{ perspective: "1000px" }}
        >
          <div className="mp-iphone relative h-[360px] w-[230px] rounded-[2.2rem]">
            {/* Hardware buttons */}
            <div className="mp-hardware absolute -left-[2px] top-[70px] h-[18px] w-[2px] rounded-l-sm" aria-hidden />
            <div className="mp-hardware absolute -left-[2px] top-[105px] h-[32px] w-[2px] rounded-l-sm" aria-hidden />
            <div className="mp-hardware absolute -left-[2px] top-[150px] h-[32px] w-[2px] rounded-l-sm" aria-hidden />
            <div className="mp-hardware absolute -right-[2px] top-[115px] h-[52px] w-[2px] rounded-r-sm" aria-hidden />

            {/* Inner screen */}
            <div className="mp-iphone-screen absolute inset-[5px] overflow-hidden rounded-[1.85rem]">
              <div className="mp-glare pointer-events-none absolute inset-0" aria-hidden />

              {/* Dynamic island */}
              <div className="absolute left-1/2 top-1.5 z-10 flex h-5 w-[68px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-2 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08)]">
                <div className="h-1 w-1 animate-pulse rounded-full bg-[#e05d38] shadow-[0_0_6px_rgba(224,93,56,0.85)]" />
              </div>

              {/* App content */}
              <div className="relative flex h-full flex-col px-4 pb-3 pt-8">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                      Module 3
                    </p>
                    <p className="mt-0.5 font-serif text-[15px] font-bold leading-tight tracking-tight text-white">
                      Visas et séjour
                    </p>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-neutral-200 shadow-lg shadow-black/50">
                    SE
                  </div>
                </div>

                {/* Progress ring */}
                <div className="relative mx-auto mt-4 mb-4 flex h-28 w-28 items-center justify-center drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]">
                  <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="7" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#e05d38" strokeWidth="7" strokeDasharray="264" strokeDashoffset="40" strokeLinecap="round" />
                  </svg>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-[2.25rem] font-extrabold leading-none tracking-tighter text-white">
                      8
                    </span>
                    <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#f5a575]">
                      Modules
                    </span>
                  </div>
                </div>

                {/* Widget rows */}
                <div className="space-y-1.5">
                  <div className="flex items-center rounded-lg border border-white/[0.03] bg-white/[0.03] p-1.5">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-orange-400/30 bg-gradient-to-br from-orange-500/20 to-orange-600/5">
                      <svg className="h-2.5 w-2.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 h-1 w-10 rounded-full bg-neutral-300/80" />
                      <div className="h-0.5 w-6 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                  <div className="flex items-center rounded-lg border border-white/[0.03] bg-white/[0.03] p-1.5">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-amber-600/5">
                      <svg className="h-2.5 w-2.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 h-1 w-8 rounded-full bg-neutral-300/80" />
                      <div className="h-0.5 w-12 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 h-[3px] w-[64px] -translate-x-1/2 rounded-full bg-white/15" />
              </div>
            </div>
          </div>

          {/* Floating badge top-left */}
          <div className="mp-floating-badge absolute -left-2 top-3 z-30 flex items-center gap-2.5 rounded-xl p-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-b from-primary/15 to-primary/5">
              <span className="text-base" aria-hidden>
                {BADGES[0].emoji}
              </span>
            </div>
            <div>
              <p className="text-[11px] font-bold leading-tight tracking-tight text-foreground">
                {BADGES[0].label}
              </p>
              <p className="text-[9px] leading-tight text-muted-foreground">
                {BADGES[0].sublabel}
              </p>
            </div>
          </div>

          {/* Floating badge bottom-right */}
          <div className="mp-floating-badge absolute -right-2 bottom-12 z-30 flex items-center gap-2.5 rounded-xl p-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-b from-primary/15 to-primary/5">
              <span className="text-base" aria-hidden>
                {BADGES[1].emoji}
              </span>
            </div>
            <div>
              <p className="text-[11px] font-bold leading-tight tracking-tight text-foreground">
                {BADGES[1].label}
              </p>
              <p className="text-[9px] leading-tight text-muted-foreground">
                {BADGES[1].sublabel}
              </p>
            </div>
          </div>
        </div>

        {/* ========= HEADING + DESCRIPTION ========= */}
        <div className="text-center">
          <h3 className="font-serif text-[1.6rem] font-bold leading-tight tracking-tight text-foreground">
            Une méthode claire, humaine et concrète.
          </h3>
          <p className="mx-auto mt-5 text-[15px] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              8 modules ultra-concrets
            </span>{" "}
            pour construire ta nouvelle vie en Thaïlande, étape par étape. Du
            visa long séjour à la fiscalité, de l&apos;école des enfants à ta
            santé, du permis thaï à ton entreprise — chaque module reprend ce
            qu&apos;on a{" "}
            <span className="font-semibold text-foreground">
              appris, vécu et surmonté
            </span>{" "}
            sur place. Pas un cours théorique. Pas une jolie carte postale. Une
            formation humaine, concrète, conçue pour t&apos;aider à poser tes
            valises sans galérer.
          </p>
        </div>

        {/* ========= CLOSING CTA HEADLINE ========= */}
        <div className="text-center">
          <h3 className="font-serif text-[2rem] font-bold leading-tight tracking-tight text-foreground">
            Chaque pas compte.
          </h3>
          <h3 className="mt-1 font-serif text-[2rem] font-extrabold leading-tight tracking-tighter text-primary">
            On t&apos;aide à faire les bons.
          </h3>
          <p className="mx-auto mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Tu sauras exactement où tu vas, pourquoi tu y vas et comment y
            arriver. Un chemin balisé, testé, validé. Accès immédiat, accès à
            vie, et trois rythmes de paiement pour avancer à ton tempo.
          </p>
        </div>

        {/* ========= CTAs ========= */}
        <div className="flex flex-col gap-3">
          <Link
            href="/#offres"
            className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-bold text-primary-foreground shadow-[0_8px_20px_-4px_rgba(224,93,56,0.4)] transition-all active:translate-y-0.5 active:shadow-none"
          >
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-80">
                Accès immédiat
              </div>
              <div className="text-[15px] font-bold leading-tight tracking-tight">
                Voir les offres
              </div>
            </div>
            <ArrowRight className="size-5 transition-transform group-active:translate-x-0.5" />
          </Link>
          <Link
            href="/programme"
            className="group inline-flex items-center justify-between gap-2 rounded-2xl border-2 border-primary bg-background px-5 py-4 text-base font-bold text-primary transition-all active:translate-y-0.5"
          >
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">
                Avant de te décider
              </div>
              <div className="text-[15px] font-bold leading-tight tracking-tight">
                Voir les modules
              </div>
            </div>
            <ArrowRight className="size-5 transition-transform group-active:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
