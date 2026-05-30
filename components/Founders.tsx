import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";

export default function Founders() {
  return (
    <section
      id="fondateurs"
      className="relative overflow-hidden bg-card py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/8 blur-3xl md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -bottom-32 hidden h-[360px] w-[360px] rounded-full bg-primary/5 blur-3xl md:block"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6">
        <FeaturedSpotlight
          label="Qui sommes-nous"
          titleLine1="On a vécu"
          titleLine2="chaque étape."
          description={
            <>
              <span className="font-semibold text-foreground">
                Khanchai &amp; Audrey.
              </span>{" "}
              Couple franco-thaï, parents, entrepreneurs. À un moment, on a dit
              stop. On a tout quitté pour s'installer ici. On a fait les
              erreurs, cherché les réponses, tracé le chemin court qu'on aurait
              voulu qu'on nous donne — et maintenant on le transmet.
            </>
          }
          ctaLabel="Notre histoire"
          ctaHref="/notre-histoire"
          imageSrc="/founders.jpg"
          imageAlt="Khanchai et Audrey, fondateurs de Siam Expat"
          indexNumber="— K & A"
        />
      </div>
    </section>
  );
}
