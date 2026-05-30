"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    border: 1px solid rgba(245, 165, 117, 0.15);
    box-shadow:
      0 24px 60px -16px rgba(0, 0, 0, 0.5),
      0 8px 24px -8px rgba(224, 93, 56, 0.2),
      inset 0 1px 1px rgba(245, 165, 117, 0.18),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
  }
  .mp-iphone-screen {
    background: #0a0604;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.9);
  }
  .mp-glare {
    background: linear-gradient(110deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 45%);
  }
  .mp-orange-grad {
    background: linear-gradient(180deg, #333333 0%, #e05d38 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export function MobileProgram() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background px-5 py-14">
      <style dangerouslySetInnerHTML={{ __html: PHONE_CSS }} />

      {/* Decorative blurs */}
      <div
        className="absolute -top-32 right-[-25%] h-[360px] w-[360px] rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-[-25%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-md space-y-9">
        {/* ============ HERO TAGLINES ============ */}
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
            Le programme
          </p>
          <h2 className="mt-3 font-serif text-[2.5rem] font-bold leading-[1.05] tracking-tight text-foreground">
            Le plan exact.
          </h2>
          <h2 className="mt-1 font-serif text-[2.5rem] font-extrabold leading-[1.05] tracking-tighter text-primary">
            pour t&apos;expatrier
            <br />
            sans stress.
          </h2>
        </div>

        {/* ============ STATIC iPHONE MOCKUP ============ */}
        <div className="flex justify-center">
          <div className="mp-iphone relative h-[300px] w-[200px] rounded-[2rem]">
            {/* Hardware buttons (silent switch + volume) */}
            <div
              className="absolute -left-[2px] top-[60px] h-[16px] w-[2px] rounded-l-sm bg-gradient-to-r from-neutral-700 to-neutral-900"
              aria-hidden
            />
            <div
              className="absolute -left-[2px] top-[90px] h-[28px] w-[2px] rounded-l-sm bg-gradient-to-r from-neutral-700 to-neutral-900"
              aria-hidden
            />
            <div
              className="absolute -left-[2px] top-[130px] h-[28px] w-[2px] rounded-l-sm bg-gradient-to-r from-neutral-700 to-neutral-900"
              aria-hidden
            />
            <div
              className="absolute -right-[2px] top-[100px] h-[44px] w-[2px] rounded-r-sm bg-gradient-to-l from-neutral-700 to-neutral-900"
              aria-hidden
            />

            {/* Screen */}
            <div className="mp-iphone-screen absolute inset-[5px] overflow-hidden rounded-[1.7rem]">
              <div
                className="mp-glare pointer-events-none absolute inset-0"
                aria-hidden
              />

              {/* Dynamic island */}
              <div className="absolute left-1/2 top-1.5 z-10 flex h-5 w-16 -translate-x-1/2 items-center justify-end rounded-full bg-black px-2 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08)]">
                <div className="h-1 w-1 animate-pulse rounded-full bg-[#e05d38] shadow-[0_0_6px_rgba(224,93,56,0.85)]" />
              </div>

              {/* App content */}
              <div className="relative flex h-full flex-col px-3.5 pb-3 pt-8">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                      Module 3
                    </p>
                    <p className="mt-0.5 font-serif text-[13px] font-bold leading-tight tracking-tight text-white">
                      Visa long séjour
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-neutral-200 shadow-lg shadow-black/50">
                    SE
                  </div>
                </div>

                {/* Progress ring */}
                <div className="relative mx-auto mt-3 mb-3 flex h-24 w-24 items-center justify-center drop-shadow-[0_10px_18px_rgba(0,0,0,0.8)]">
                  <svg
                    className="absolute inset-0 h-full w-full -rotate-90"
                    viewBox="0 0 100 100"
                    aria-hidden
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="7"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#e05d38"
                      strokeWidth="7"
                      strokeDasharray="264"
                      strokeDashoffset="40"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-3xl font-extrabold tracking-tighter text-white">
                      8
                    </span>
                    <span className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.15em] text-[#f5a575]">
                      Modules
                    </span>
                  </div>
                </div>

                {/* Widgets */}
                <div className="space-y-1.5">
                  <div className="flex items-center rounded-lg border border-white/[0.03] bg-white/[0.03] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-orange-400/30 bg-gradient-to-br from-orange-500/20 to-orange-600/5">
                      <svg
                        className="h-2.5 w-2.5 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
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
                      <div className="mb-1 h-1 w-10 rounded-full bg-neutral-300/80" />
                      <div className="h-0.5 w-6 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                  <div className="flex items-center rounded-lg border border-white/[0.03] bg-white/[0.03] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-amber-600/5">
                      <svg
                        className="h-2.5 w-2.5 text-amber-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
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
                      <div className="mb-1 h-1 w-8 rounded-full bg-neutral-300/80" />
                      <div className="h-0.5 w-12 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 h-[3px] w-[60px] -translate-x-1/2 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>

        {/* ============ HEADING + DESCRIPTION (collapsible) ============ */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h3 className="text-center font-serif text-[1.4rem] font-bold leading-tight tracking-tight text-foreground">
            Une méthode claire, humaine et concrète.
          </h3>
          <div className="mt-4">
            <p className="text-center text-[13px] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                8 modules ultra-concrets
              </span>{" "}
              pour construire ta nouvelle vie en Thaïlande, étape par étape.
              {!expanded && "…"}
              {expanded && (
                <>
                  {" "}
                  Du visa long séjour à la fiscalité, de l&apos;école des
                  enfants à ta santé, du permis thaï à ton entreprise — chaque
                  module reprend ce qu&apos;on a{" "}
                  <span className="font-semibold text-foreground">
                    appris, vécu et surmonté
                  </span>{" "}
                  sur place. Pas un cours théorique. Pas une jolie carte
                  postale. Une formation humaine, concrète, conçue pour
                  t&apos;aider à poser tes valises sans galérer.
                </>
              )}
            </p>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/[0.06] py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary/[0.12] active:bg-primary/[0.18]"
              aria-expanded={expanded}
            >
              {expanded ? "Refermer" : "Lire la suite"}
              <ChevronDown
                className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Badges */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center rounded-xl border border-primary/25 bg-primary/[0.05] p-3 text-center"
              >
                <div className="text-xl" aria-hidden>
                  {b.emoji}
                </div>
                <p className="mt-1.5 text-[10px] font-bold leading-tight text-foreground">
                  {b.label}
                </p>
                <p className="mt-0.5 text-[9px] leading-tight text-muted-foreground">
                  {b.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============ CLOSING CTA ============ */}
        <div className="text-center">
          <h3 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground">
            Chaque pas compte.
          </h3>
          <h3 className="mt-1 font-serif text-3xl font-extrabold leading-tight tracking-tighter text-primary">
            On t&apos;aide à faire les bons.
          </h3>
          <p className="mx-auto mt-5 text-[13px] leading-relaxed text-muted-foreground">
            Tu sauras exactement où tu vas, pourquoi tu y vas et comment y
            arriver. Un chemin balisé, testé, validé. Accès immédiat, accès à
            vie, et trois rythmes de paiement pour avancer à ton tempo.
          </p>
        </div>

        {/* ============ CTAs ============ */}
        <div className="flex flex-col gap-3">
          <Link
            href="/#offres"
            className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-bold text-primary-foreground shadow-[0_8px_20px_-4px_rgba(224,93,56,0.4)] transition-all active:translate-y-0.5 active:shadow-none"
          >
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-80">
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
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-70">
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
