import { HeroSection2 } from "@/components/ui/hero-section-2";

const FOOTER_ITEMS = [
  {
    label: "Routine",
    value: "Métro-boulot-épuisement. Tu rêves d'ailleurs sans plan.",
  },
  {
    label: "Vertige",
    value: "Partir avec les enfants. L'école, la santé, ne pas improviser.",
  },
  {
    label: "Repères",
    value: "Trop d'avis contradictoires. Pas assez de clarté.",
  },
];

export default function PainPoints() {
  return (
    <HeroSection2
      slogan="Est-ce que ça te parle ?"
      title={
        <>
          Personne ne part
          <br />
          <span className="text-primary">par hasard.</span>
        </>
      }
      subtitle="9 personnes sur 10 finissent bloquées. Fatigue, famille, indépendance, sens, brouillard des infos — les raisons sont toujours les mêmes. Ce qui manque, ce n'est pas l'envie. C'est la méthode."
      callToAction={{
        text: "Découvre la méthode",
        href: "#programme",
      }}
      videoUrl="/painpoints.mp4"
      footerItems={FOOTER_ITEMS}
      className="bg-muted"
    />
  );
}
