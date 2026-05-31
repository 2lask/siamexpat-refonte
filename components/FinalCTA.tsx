export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 text-background md:py-24">
      <div className="absolute inset-0 bg-grain opacity-10" aria-hidden />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          Tu ne prends pas un risque.
          <span className="block text-primary">Tu prends le contrôle.</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-background/70 md:text-lg">
          Changer de pays, c'est pas juste partir. C'est repenser ta vie.
          Et cette formation, c'est l'épaule qu'on aurait voulu avoir — on te la tend.
        </p>

        <a
          href="#offres"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90 sm:px-7 sm:py-4 sm:text-base"
        >
          Je rejoins la formation maintenant
          <span>→</span>
        </a>

        <p className="mt-5 text-xs uppercase tracking-wider text-background/50">
          Accès immédiat · Accès à vie
        </p>
      </div>
    </section>
  );
}
