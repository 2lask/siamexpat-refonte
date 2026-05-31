import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToHomeLink } from "@/components/BackToHomeLink";

export const metadata: Metadata = {
  title: "Notre histoire — Khanchai & Audrey · Siam Expat",
  description:
    "Couple franco-thaï, parents et entrepreneurs. Pourquoi on a tout quitté pour Bangkok, ce qu'on a appris, et pourquoi on a monté la formation Siam Expat.",
};

export default function NotreHistoire() {
  return (
    <main>
      <Header />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grain absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full bg-primary/18 blur-3xl md:-top-32 md:-right-32 md:h-[460px] md:w-[460px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[260px] w-[260px] rounded-full bg-primary/14 blur-3xl md:-bottom-32 md:-left-32 md:h-[400px] md:w-[400px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-16 text-center md:pt-32 md:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Pourquoi nous ?
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Une décision.
            <span className="block text-primary">Deux vies réinventées.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Nous, c'est{" "}
            <span className="font-semibold text-foreground">
              Khanchai &amp; Audrey
            </span>
            . Couple franco-thaï, parents, entrepreneurs — et anciens « rêveurs
            coincés dans une vie qui ne nous ressemblait plus ».
          </p>
        </div>
      </section>

      {/* ============ LE STOP — narrative poétique + photo ============ */}
      <section className="relative overflow-hidden bg-card py-20 md:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-1/3 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/16 blur-3xl md:-right-32 md:h-[480px] md:w-[480px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
            <div className="relative order-2 md:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                Le tournant
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                À un moment,
                <span className="block text-primary">on a dit stop.</span>
              </h2>

              <div className="mt-8 space-y-2 font-serif text-xl leading-snug text-foreground md:text-2xl">
                <p>Stop à la routine sans âme.</p>
                <p>Stop à cette impression de passer à côté de notre vie.</p>
              </div>

              <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                On a pris une décision radicale&nbsp;:{" "}
                <span className="font-semibold text-foreground">
                  tout quitter pour s'installer à Bangkok.
                </span>{" "}
                On était deux, bientôt en famille. On laissait derrière nous des
                repères, des habitudes, un confort relatif — et on partait, sans
                certitude, vers quelque chose qui nous ressemblerait peut-être
                enfin.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div
                className="absolute -inset-3 hidden border border-primary/20 md:block"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/founders.jpg"
                  alt="Khanchai et Audrey, fondateurs de Siam Expat"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <p className="mt-4 text-right font-mono text-xs text-muted-foreground">
                — Khanchai &amp; Audrey, Bangkok
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NARRATION FLUIDE — Saut → Erreurs → Formation ============ */}
      <section className="relative overflow-hidden border-y border-border bg-muted py-20 md:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/16 blur-3xl md:h-[520px] md:w-[520px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          {/* Le saut */}
          <h2 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl">
            C'était un saut dans l'inconnu.
          </h2>
          <p className="mt-5 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
            Mais aussi le{" "}
            <span className="not-italic font-semibold text-primary">
              début d'une vie plus alignée, plus libre, plus vivante.
            </span>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Une vie où on se sent à notre place. Où nos enfants grandissent au
            soleil, dans un environnement sain, multiculturel et dynamique.
          </p>

          {/* Séparateur subtil */}
          <div className="mx-auto my-14 h-px w-16 bg-primary/40 md:my-20" aria-hidden />

          {/* Les erreurs / les réponses */}
          <div className="space-y-1 md:space-y-2">
            <h2 className="font-serif text-4xl font-semibold leading-[1] tracking-tight text-foreground md:text-6xl">
              On a fait les erreurs.
            </h2>
            <h2 className="font-serif text-4xl font-semibold leading-[1] tracking-tight text-primary md:text-6xl">
              On a cherché les réponses.
            </h2>
          </div>
          <p className="mx-auto mt-7 max-w-xl text-balance font-serif text-lg italic leading-relaxed text-foreground md:text-xl">
            Et maintenant, on t'aide à gagner du temps, de l'énergie…
            <span className="font-semibold not-italic text-primary">
              {" "}
              et de la clarté.
            </span>
          </p>

          {/* Séparateur subtil */}
          <div className="mx-auto my-14 h-px w-16 bg-primary/40 md:my-20" aria-hidden />

          {/* La formation, l'aboutissement */}
          <p className="font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
            <span className="italic">
              « Réussir son Expatriation en Thaïlande »
            </span>{" "}
            est le fruit de tout ce qu'on a{" "}
            <span className="text-primary">appris, vécu et surmonté.</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Pas un cours théorique. Pas une jolie carte postale. Une formation{" "}
            <span className="font-semibold text-foreground">
              humaine, concrète,
            </span>{" "}
            conçue pour t'aider à{" "}
            <span className="font-semibold text-primary">
              poser tes valises sans galérer.
            </span>
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-card py-20 md:py-24">
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/16 blur-3xl md:-left-32 md:h-[460px] md:w-[460px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Si notre chemin te parle
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            On peut t'éviter
            <span className="block text-primary">les détours qu'on a pris.</span>
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#offres"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Voir les offres
              <ArrowRight className="size-4" />
            </Link>
            <BackToHomeLink className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/40">
              <ArrowLeft className="size-4" />
              Retour à l'accueil
            </BackToHomeLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
