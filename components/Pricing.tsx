import { Fragment } from "react";

import { GlowingShadow } from "@/components/ui/glowing-shadow";

const PLANS = [
  {
    name: "En une fois",
    price: "127",
    sub: "€ · paiement unique",
    description: "Le prix le plus bas. Tu démarres l'esprit libre.",
    highlight: false,
    cta: "Je choisis ce rythme",
  },
  {
    name: "En 2 fois",
    price: "67",
    sub: "€ × 2 mois",
    description: "L'option la plus choisie. Souplesse et accès immédiat.",
    highlight: true,
    cta: "Je choisis ce rythme",
  },
  {
    name: "En 3 fois",
    price: "47",
    sub: "€ × 3 mois",
    description: "La flexibilité maximale pour démarrer dès aujourd'hui.",
    highlight: false,
    cta: "Je choisis ce rythme",
  },
];

const INCLUDED = [
  { label: "Les 8 modules complets", detail: "Toutes les vidéos, sans exception." },
  { label: "Accès immédiat", detail: "Tu reçois tes identifiants à l'inscription." },
  { label: "Accès à vie", detail: "Mises à jour incluses, tant que la formation existe." },
  { label: "Checklist détaillée", detail: "Pré-départ + post-arrivée, étape par étape." },
  { label: "Espace membre privé", detail: "Tout est centralisé, pas de mail perdu." },
  { label: "Accompagnement humain", detail: "On reste joignables. Pas de robot." },
];

export default function Pricing() {
  return (
    <section id="offres" className="bg-muted py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-primary md:text-sm">
            L'offre
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-6xl">
            Tu choisis le rythme.
            <span className="block text-primary">On t'embarque pareil.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Une seule formation. Trois façons de la payer. Mêmes modules,
            même accès immédiat, même accès à vie — quelle que soit l'option.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {PLANS.map((p) => {
            const card = (
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all md:p-7 ${
                  p.highlight
                    ? "border-primary bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_30px_-12px_rgba(224,93,56,0.35)] ring-1 ring-primary/30"
                    : "border-border bg-card hover:-translate-y-0.5 hover:border-foreground/20"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                    Le plus choisi
                  </span>
                )}

                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {p.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-6xl font-semibold leading-none text-foreground">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.sub}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <a
                  href="https://siamexpat.systeme.io/6587c8d3-c1e6e349"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    p.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-foreground/15 bg-transparent text-foreground hover:border-foreground/40"
                  }`}
                >
                  {p.cta}
                  <span>→</span>
                </a>
              </div>
            );

            return p.highlight ? (
              <GlowingShadow key={p.name} className="rounded-2xl">
                {card}
              </GlowingShadow>
            ) : (
              <Fragment key={p.name}>{card}</Fragment>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Quelle que soit la formule, tout est compris
          </p>
          <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <li
                key={item.label}
                className="border-l border-primary/40 pl-4 leading-relaxed"
              >
                <div className="font-serif text-base font-semibold text-foreground">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.detail}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Paiement sécurisé. Tu reçois tes accès dès la validation —
          que tu paies en une, deux ou trois fois.
        </p>
      </div>
    </section>
  );
}
