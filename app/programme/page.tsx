import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToHomeLink } from "@/components/BackToHomeLink";

export const metadata: Metadata = {
  title: "Le programme — 8 modules en détail · Siam Expat",
  description:
    "Le détail exact, module par module, des 8 vidéos de la formation. Visa, fiscalité, école, santé, entreprise, checklist — et ce que tu en retires concrètement.",
};

const MODULES = [
  {
    num: "01",
    title: "Introduction à l'expatriation en Thaïlande",
    description:
      "Comprendre le pays, la culture, les motivations d'expatriation et les réalités concrètes à connaître avant de faire le saut.",
  },
  {
    num: "02",
    title: "Fiscalité des expatriés",
    description:
      "Résidence fiscale, types d'impôts, conventions internationales, stratégies d'optimisation, cas particuliers pour retraités et entrepreneurs.",
  },
  {
    num: "03",
    title: "Visas et séjour longue durée",
    description:
      "Types de visas, conditions, renouvellements, démarches clés, erreurs fréquentes et astuces pour rester en règle sur le long terme.",
  },
  {
    num: "04",
    title: "Permis de conduire et mobilité",
    description:
      "Permis international vs local, comment obtenir un permis thaï, assurance véhicule et règles de conduite.",
  },
  {
    num: "05",
    title: "Scolarisation et vie de famille",
    description:
      "Choix d'école, calendrier, transports, activités extrascolaires, vie quotidienne avec enfants, équilibre pro/perso.",
  },
  {
    num: "06",
    title: "Santé et assurance",
    description:
      "Système de santé local, assurance locale/internationale, comparatifs, maternité, urgences, prise en charge complète.",
  },
  {
    num: "07",
    title: "Créer ou gérer une entreprise en Thaïlande",
    description:
      "Structures juridiques, création d'entreprise, fiscalité, embauche, réglementation, outils bancaires et gestion quotidienne.",
  },
  {
    num: "08",
    title: "Checklist et accompagnement",
    description:
      "Checklist complète pré-départ + post-arrivée, erreurs à éviter, ressources utiles, coaching personnalisé pour les profils qui veulent aller plus loin.",
  },
];

const OUTCOMES = [
  {
    num: "01",
    title: "Une vision claire de ton projet d'expatriation",
    body:
      "Tu sauras exactement où tu vas, pourquoi tu y vas et comment y arriver. Plus de flou, plus de doutes, plus de procrastination.",
  },
  {
    num: "02",
    title: "Un plan d'action précis, étape par étape",
    body:
      "Démarches administratives, fiscalité, logement, école, visa, santé, sécurité… Tu auras un chemin balisé, testé, validé.",
  },
  {
    num: "03",
    title: "Une installation sereine pour ta famille",
    body:
      "Tu sauras comment t'organiser pour que tout le monde trouve sa place, sans sacrifier ni l'éducation des enfants, ni ton bien-être de parent.",
  },
  {
    num: "04",
    title: "Un cadre solide pour développer ton activité",
    body:
      "Tu verras comment entreprendre légalement, efficacement et durablement depuis la Thaïlande, sans mauvaise surprise fiscale ou juridique.",
  },
  {
    num: "05",
    title: "Une connexion humaine avec ceux qui l'ont vécu",
    body:
      "Pas de théorie : tu es accompagné par un couple qui a traversé chaque étape. On ne t'apprend pas un rêve, on t'aide à construire le tien.",
  },
  {
    num: "06",
    title: "Un nouveau départ, plus libre et plus aligné",
    body:
      "Parce qu'au fond, tu ne cherches pas juste un déménagement. Tu veux retrouver du sens, du temps, un rythme de vie qui te ressemble. Et c'est exactement ce qu'on t'aide à faire.",
  },
];

export default function ProgrammePage() {
  return (
    <main>
      <Header />

      {/* HERO compact */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grain absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-primary/18 blur-3xl md:-right-32 md:-top-32 md:h-[460px] md:w-[460px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-12 md:pt-32 md:pb-14">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Le programme
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Module
            <span className="text-primary"> par module.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Le titre et le sujet exact de chaque vidéo, et ce que tu en
            retires une fois le parcours terminé.
          </p>
        </div>
      </section>

      {/* 8 MODULES — GRID 2 COLONNES */}
      <section className="bg-card py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between md:mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Les 8 modules
            </p>
            <p className="hidden text-xs text-muted-foreground md:block">
              Dans l'ordre du parcours
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {MODULES.map((m) => (
              <article
                key={m.num}
                className="group relative flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-primary/[0.03] md:p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-serif text-4xl font-bold leading-none tracking-tighter text-primary md:text-5xl"
                    aria-hidden
                  >
                    {m.num}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Module
                  </span>
                </div>
                <h2 className="mt-1 font-serif text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
                  {m.title}
                </h2>
                <p className="text-sm leading-relaxed text-foreground/75 md:text-[15px]">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE TU EN RETIRES — 6 piliers verbatim */}
      <section className="border-y border-border bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Ce que tu en retires
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Une expatriation réussie, fluide,{" "}
              <span className="text-primary">
                alignée avec ta vie et tes valeurs.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="relative flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm md:p-6"
              >
                <span
                  className="block h-px w-8 bg-primary"
                  aria-hidden
                />
                <h3 className="mt-4 font-serif text-base font-semibold leading-tight tracking-tight text-foreground md:text-lg">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA minimal */}
      <section className="bg-card py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
            Le programme te parle ? L'offre est juste là.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
