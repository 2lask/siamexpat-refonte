import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToHomeLink } from "@/components/BackToHomeLink";

export const metadata: Metadata = {
  title: "Conditions générales de vente · Siam Expat",
  description:
    "Conditions générales applicables à la vente de la formation Réussir son Expatriation en Thaïlande.",
};

export default function CgvPage() {
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
            Conditions générales
            <span className="block text-primary">de vente.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Les éléments essentiels qui encadrent l'achat et l'accès à la
            formation. Pour toute question complémentaire, écris-nous à{" "}
            <a
              href="mailto:hello@siam-expat.com"
              className="text-primary underline-offset-2 hover:underline"
            >
              hello@siam-expat.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              1. Vendeur
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p className="font-medium text-foreground">Siam Expat</p>
              <p className="mt-1">
                Two Pacific Place, 142 Sukhumvit Rd
                <br />
                Khlong Toei, Bangkok 10110, Thaïlande
              </p>
              <p className="mt-2">
                Email :{" "}
                <a
                  href="mailto:hello@siam-expat.com"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  hello@siam-expat.com
                </a>
                <br />
                Téléphone : <a href="tel:+66989616468" className="hover:text-foreground">+66 98 961 6468</a>
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              2. Objet
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Les présentes conditions encadrent la vente de la formation en
              ligne intitulée «&nbsp;Réussir son Expatriation en Thaïlande&nbsp;»,
              composée de 8 modules vidéos accessibles via un espace membre
              dédié.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              3. Prix et modalités de paiement
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>
                <span className="font-medium text-foreground">En une fois&nbsp;:</span>{" "}
                127&nbsp;€ TTC, prélevés à la commande.
              </li>
              <li>
                <span className="font-medium text-foreground">En 2 fois&nbsp;:</span>{" "}
                2 × 67&nbsp;€, prélevés mensuellement.
              </li>
              <li>
                <span className="font-medium text-foreground">En 3 fois&nbsp;:</span>{" "}
                3 × 47&nbsp;€, prélevés mensuellement.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Paiement sécurisé via prestataire tiers. Les transactions sont
              chiffrées et traitées hors de nos serveurs.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              4. Accès à la formation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              L'accès à l'espace membre et aux 8 modules est délivré
              immédiatement après validation du paiement. L'accès est garanti{" "}
              <span className="font-medium text-foreground">à vie</span>, et les
              mises à jour futures de la formation sont incluses.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              5. Droit de rétractation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Conformément à l'article L221-28 du Code de la consommation, le
              droit de rétractation ne s'applique pas aux contenus numériques
              fournis sur un support immatériel dont l'exécution a commencé
              avec l'accord exprès de l'acheteur et le renoncement à son droit
              de rétractation. L'accès immédiat à la formation vaut acceptation
              de cette renonciation.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              6. Réclamation et service client
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Pour toute question, remarque ou réclamation, écris-nous à{" "}
              <a
                href="mailto:hello@siam-expat.com"
                className="text-primary underline-offset-2 hover:underline"
              >
                hello@siam-expat.com
              </a>
              . On s'engage à répondre dans les meilleurs délais.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              7. Propriété intellectuelle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              L'ensemble du contenu de la formation (vidéos, textes,
              illustrations, ressources téléchargeables) reste la propriété
              exclusive de Siam Expat. Toute reproduction, diffusion ou revente
              est strictement interdite sans accord écrit préalable.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              8. Droit applicable
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Les présentes conditions sont régies par le droit en vigueur. En
              cas de litige, une solution amiable sera systématiquement
              recherchée avant tout recours.
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
