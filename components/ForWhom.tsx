import { Check, X } from "lucide-react";

const FOR = [
  "En phase de transition ou de préparation sérieuse.",
  "T'expatrier en Thaïlande, pas juste « partir ailleurs ».",
  "Une approche humaine, structurée, ancrée dans le réel.",
  "Des repères fiables, pas des avis aléatoires de forum.",
  "Prêt à investir du temps et de l'énergie dans ton projet.",
];

const NOT_FOR = [
  "Penser que s'expatrier, c'est juste « vivre en vacances ».",
  "Refuser toute démarche administrative ou cadre légal.",
  "Chercher des raccourcis magiques ou des combines douteuses.",
  "Copier la vie de quelqu'un d'autre sans réfléchir à la tienne.",
  "« Tester un mois » sans te poser les vraies questions.",
];

export default function ForWhom() {
  return (
    <section id="pour-qui" className="bg-card py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
            Pour qui · Pour qui pas
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
            On préfère être clairs,{" "}
            <span className="text-primary">dès le départ.</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-5">
          <div className="rounded-xl border border-primary/25 bg-primary/[0.05] p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <h3 className="font-serif text-base font-semibold text-foreground">
                Elle est faite pour toi si...
              </h3>
            </div>
            <ul className="space-y-1.5">
              {FOR.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-xs leading-snug text-foreground/85 md:text-[13px]"
                >
                  <span className="mt-1 size-1 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-muted p-4 md:p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/15 text-muted-foreground">
                <X className="size-3.5" strokeWidth={3} />
              </span>
              <h3 className="font-serif text-base font-semibold text-muted-foreground">
                Elle n'est pas pour toi si...
              </h3>
            </div>
            <ul className="space-y-1.5">
              {NOT_FOR.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-xs leading-snug text-muted-foreground md:text-[13px]"
                >
                  <span className="mt-1 size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-center text-xs italic text-muted-foreground md:text-sm">
          Si tu te reconnais dans ne serait-ce qu'un de ces points —{" "}
          <span className="font-medium not-italic text-primary">tu es au bon endroit</span>.
        </p>
      </div>
    </section>
  );
}
