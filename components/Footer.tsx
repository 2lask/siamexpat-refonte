import Image from "next/image";

const COLS = [
  {
    title: "Siam Expat",
    links: [
      { label: "Notre histoire", href: "/notre-histoire" },
      { label: "Programme", href: "/#programme" },
      { label: "L'offre", href: "/#offres" },
      { label: "Contact", href: "mailto:hello@siam-expat.com" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Conditions générales", href: "/cgv" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Siam Expat"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              La méthode humaine et concrète pour réussir son expatriation
              en Thaïlande — sans se perdre en chemin.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contactez-nous
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="leading-relaxed">
                Two Pacific Place<br />
                142 Sukhumvit Rd<br />
                Khlong Toei, Bangkok 10110
              </li>
              <li>
                <a href="tel:+66989616468" className="transition-colors hover:text-foreground">
                  +66 98 961 6468
                </a>
              </li>
              <li>
                <a href="mailto:hello@siam-expat.com" className="transition-colors hover:text-foreground">
                  hello@siam-expat.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Siam Expat. Tous droits réservés.</span>
          <span>Fait avec ❤️ depuis Bangkok</span>
        </div>
      </div>
    </footer>
  );
}
