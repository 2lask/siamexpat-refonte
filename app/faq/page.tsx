import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes · Siam Expat",
  description:
    "Format, durée, paiement, accompagnement — les réponses aux questions qu'on nous pose le plus.",
};

const FAQ = [
  {
    q: "Quel est le format de la formation ?",
    a: "8 modules vidéos qu'on a pensés comme un parcours réel, à dérouler étape par étape. De la fiscalité au visa, de l'école à la santé, du permis à l'entreprise.",
  },
  {
    q: "Quand est-ce que je reçois mes accès ?",
    a: "Accès immédiat. Tu reçois tes identifiants à la validation du paiement et tu peux commencer la formation tout de suite.",
  },
  {
    q: "Combien de temps ai-je accès à la formation ?",
    a: "À vie. Tant que la formation existe, tu peux y revenir autant que tu veux. Les mises à jour futures sont incluses, sans frais supplémentaires.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Trois rythmes possibles : 127 € en une fois, 2 × 67 € sur deux mois, ou 3 × 47 € sur trois mois. Même contenu, même accès — quelle que soit l'option choisie.",
  },
  {
    q: "Pour qui n'est pas faite cette formation ?",
    a: "Si tu cherches des raccourcis magiques ou des combines douteuses, si tu refuses toute démarche administrative, ou si tu veux juste « tester un mois » sans te poser les vraies questions — ce n'est pas pour toi.",
  },
  {
    q: "Y a-t-il un accompagnement individuel ?",
    a: "Le coaching personnalisé est disponible en option, pour les profils qui veulent aller plus loin. On en parle directement par mail si tu veux explorer cette voie.",
  },
  {
    q: "Sur quel appareil puis-je suivre la formation ?",
    a: "Ordinateur, tablette, téléphone — tout y passe. Tu te connectes à ton espace membre et tu regardes les modules à ton rythme, où que tu sois.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Par mail à hello@siam-expat.com ou par téléphone au +66 98 961 6468. On répond, en vrai.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grain absolute inset-0 opacity-50" aria-hidden />
        <div
          className="absolute -top-32 right-[-5%] h-[360px] w-[360px] rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-6 pt-28 pb-12 md:pt-32 md:pb-14">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            FAQ
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Les questions
            <span className="block text-primary">qu'on nous pose.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tout ce que tu veux savoir avant de te lancer. Si quelque chose
            manque, écris-nous — on répond.
          </p>
        </div>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => (
              <details
                key={item.q}
                className="group py-6 md:py-7"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h2 className="font-serif text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
                    {item.q}
                  </h2>
                  <span
                    className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/[0.05] text-primary transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
            Une autre question ? Écris-nous, on répond en vrai.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@siam-expat.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              hello@siam-expat.com
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              <ArrowLeft className="size-4" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
