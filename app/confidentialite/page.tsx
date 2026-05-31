import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToHomeLink } from "@/components/BackToHomeLink";

export const metadata: Metadata = {
  title: "Politique de confidentialité · Siam Expat",
  description:
    "Comment Siam Expat collecte, utilise et protège tes données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grain absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 pt-28 pb-12 md:pt-32 md:pb-14">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Mentions légales
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Politique de
            <span className="block text-primary">confidentialité.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Quelles données on collecte, pourquoi, et comment tu peux les
            consulter, modifier ou supprimer.
          </p>
        </div>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              1. Qui est responsable de tes données ?
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Siam Expat, joignable à{" "}
                <a
                  href="mailto:hello@siam-expat.com"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  hello@siam-expat.com
                </a>{" "}
                — Two Pacific Place, 142 Sukhumvit Rd, Khlong Toei, Bangkok
                10110.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              2. Quelles données on collecte
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>
                <span className="font-medium text-foreground">Identité&nbsp;:</span>{" "}
                prénom et nom, fournis lors de l'achat.
              </li>
              <li>
                <span className="font-medium text-foreground">Contact&nbsp;:</span>{" "}
                adresse email pour l'envoi des identifiants, des communications
                liées à la formation et du service après-vente.
              </li>
              <li>
                <span className="font-medium text-foreground">Paiement&nbsp;:</span>{" "}
                traité par notre prestataire de paiement sécurisé. Nous ne
                stockons jamais tes données bancaires.
              </li>
              <li>
                <span className="font-medium text-foreground">Usage&nbsp;:</span>{" "}
                données d'utilisation de l'espace membre (modules consultés,
                progression) pour améliorer la formation.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              3. Pourquoi on les collecte
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>Te donner accès à la formation que tu as achetée.</li>
              <li>Te contacter en cas de besoin (support, mises à jour).</li>
              <li>Respecter nos obligations légales et fiscales.</li>
              <li>
                Améliorer l'expérience de la formation, à partir d'usages
                anonymisés.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              4. Combien de temps on les conserve
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Tes données sont conservées tant que tu as accès à la formation.
              Les données comptables sont conservées 10 ans, conformément aux
              obligations légales. Au-delà, elles sont supprimées sur demande
              ou automatiquement.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              5. Tes droits
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Conformément au RGPD, tu peux à tout moment&nbsp;: accéder à tes
              données, les rectifier, les supprimer, les exporter, ou nous
              demander de limiter leur traitement. Pour exercer ces droits,
              écris-nous à{" "}
              <a
                href="mailto:hello@siam-expat.com"
                className="text-primary underline-offset-2 hover:underline"
              >
                hello@siam-expat.com
              </a>
              .
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              6. Cookies
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              On utilise uniquement des cookies techniques nécessaires au bon
              fonctionnement du site et de l'espace membre. Aucun cookie de
              tracking publicitaire n'est posé sans ton consentement explicite.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              7. Sous-traitants
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Pour assurer le fonctionnement du service, nous travaillons avec
              des prestataires (paiement, hébergement, livraison de la
              formation). Tous sont engagés contractuellement à respecter le
              RGPD et la confidentialité de tes données.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              8. Contact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Pour toute question liée à tes données ou à cette politique,
              écris-nous à{" "}
              <a
                href="mailto:hello@siam-expat.com"
                className="text-primary underline-offset-2 hover:underline"
              >
                hello@siam-expat.com
              </a>
              . On répond.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <BackToHomeLink className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-foreground/40">
            <ArrowLeft className="size-4" />
            Retour à l'accueil
          </BackToHomeLink>
        </div>
      </section>

      <Footer />
    </main>
  );
}
