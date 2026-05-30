"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Force-play the background video — fallback for iOS Safari edge cases
    const v = videoRef.current;
    if (v) {
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      const onVisible = () => tryPlay();
      document.addEventListener("visibilitychange", onVisible);
      return () => document.removeEventListener("visibilitychange", onVisible);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Re-entrant cleanup for any in-flight scroll attempt
    let activeRaf = 0;
    let activeTimeout: number | undefined;
    let cancelled = false;

    // Robust scroll with GSAP-aware stability detection.
    // Re-checks scrollHeight each frame; once stable for ~10 frames, stops.
    // Pass hash to scroll to that anchor, or null to scroll to top.
    const scrollStable = (hash: string | null) => {
      cancelAnimationFrame(activeRaf);
      if (activeTimeout) window.clearTimeout(activeTimeout);

      const scrollToTarget = () => {
        if (hash === null) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
          return;
        }
        const el = document.querySelector(hash) as HTMLElement | null;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, left: 0, behavior: "instant" as ScrollBehavior });
      };

      let lastHeight = document.documentElement.scrollHeight;
      let stableFrames = 0;
      let frames = 0;

      const tick = () => {
        if (cancelled) return;
        frames++;
        const currentHeight = document.documentElement.scrollHeight;
        if (currentHeight === lastHeight) {
          stableFrames++;
        } else {
          stableFrames = 0;
          lastHeight = currentHeight;
        }
        scrollToTarget();
        if (stableFrames >= 10 || frames >= 120) return;
        activeRaf = requestAnimationFrame(tick);
      };

      scrollToTarget();
      activeRaf = requestAnimationFrame(tick);
      activeTimeout = window.setTimeout(scrollToTarget, 2500);
    };

    // Alias for hash-only calls (back-compat shape)
    const scrollToHashStable = (hash: string) => scrollStable(hash);

    // 1. Initial mount — scroll to top OR to hash if present
    if (window.location.hash) {
      scrollStable(window.location.hash);
    } else {
      scrollStable(null);
    }

    // 2. Hash change via Next.js navigation (different hash arrives via URL)
    const handleHashChange = () => {
      if (window.location.hash) scrollToHashStable(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    // 3. Click on a same-page anchor — re-scroll even if hash didn't change.
    //    Next.js Link skips scroll when URL is identical; we override that.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest(
        "a",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIdx = href.indexOf("#");
      if (hashIdx === -1) return;
      const hash = href.substring(hashIdx);
      if (hash.length < 2) return;

      // Only intercept if the target page is the current page
      const pathPart = href.substring(0, hashIdx);
      const currentPath = window.location.pathname;
      const samePage =
        pathPart === "" ||
        pathPart === currentPath ||
        (pathPart === "/" && currentPath === "/");

      if (!samePage) return;

      e.preventDefault();
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
      scrollToHashStable(hash);
    };
    document.addEventListener("click", handleClick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(activeRaf);
      if (activeTimeout) window.clearTimeout(activeTimeout);
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden py-20 md:py-24">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/85 via-foreground/70 to-foreground/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/65 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-muted md:h-9"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <AnimatedGroup variants={transitionVariants}>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary drop-shadow">
              La méthode Siam Expat
            </p>

            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              Réussir son expatriation
              <span className="block text-primary">en Thaïlande.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow md:text-xl">
              Pas un guide à survoler. Pas une jolie carte postale.
              Une méthode humaine, concrète, pensée pour t'aider à poser
              tes valises — sans te perdre en chemin.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.6,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 text-sm shadow-lg sm:px-7 sm:text-base"
            >
              <Link href="/#offres">
                <span>Je commence maintenant</span>
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <div className="rounded-full border border-white/30 bg-white/5 p-0.5 backdrop-blur-md">
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-6 text-sm text-white hover:bg-white/10 hover:text-white sm:px-7 sm:text-base"
              >
                <Link href="/#programme">
                  <span>Découvrir le programme</span>
                </Link>
              </Button>
            </div>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.9,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 flex items-start gap-5 border-t border-white/20 pt-7"
          >
            <div
              className="mt-1 h-10 w-[3px] shrink-0 rounded-full bg-primary"
              aria-hidden
            />
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                Accompagnement humain
                <span className="mx-2 text-primary">·</span>
                Accès à vie
                <span className="mx-2 text-primary">·</span>
                Mises à jour incluses
              </p>
              <p className="mt-4 font-serif text-base font-semibold text-white drop-shadow">
                Une formation complète.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                Pensée par un couple qui a vécu chaque étape —
                administratif, famille, business, vie quotidienne.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
