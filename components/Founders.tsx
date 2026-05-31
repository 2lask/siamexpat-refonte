import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";

export default function Founders() {
  return (
    <section
      id="fondateurs"
      className="relative overflow-hidden bg-card py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-primary/18 blur-3xl md:-left-32 md:h-[460px] md:w-[460px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 h-[260px] w-[260px] rounded-full bg-primary/14 blur-3xl md:-right-32 md:-bottom-32 md:h-[400px] md:w-[400px]"
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
