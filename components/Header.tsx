"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { name: "Programme", href: "/#programme" },
  { name: "Pour qui", href: "/#pour-qui" },
  { name: "L'offre", href: "/#offres" },
  { name: "Notre histoire", href: "/notre-histoire" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header>
      <nav
        data-state={open ? "active" : "idle"}
        className="group fixed inset-x-0 top-0 z-50 px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-10",
            scrolled &&
              "max-w-4xl rounded-2xl border border-border bg-background/70 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Siam Expat — accueil"
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Siam Expat"
                  width={180}
                  height={72}
                  priority
                  className={cn(
                    "w-auto transition-all duration-300",
                    scrolled ? "h-10" : "h-12",
                  )}
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-foreground lg:hidden"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200",
                    open && "rotate-180 scale-0 opacity-0",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                    open && "rotate-0 scale-100 opacity-100",
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-card/80 px-2 py-1 text-sm shadow-sm backdrop-blur-md">
                {NAV.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background/60 hover:text-foreground"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-foreground/5 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                open && "block",
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {NAV.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-muted-foreground duration-150 hover:text-foreground"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className={cn("rounded-full px-5", scrolled && "lg:hidden")}
                >
                  <Link href="/#offres">
                    <span>Rejoindre</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "rounded-full px-5",
                    scrolled ? "lg:inline-flex" : "hidden",
                  )}
                >
                  <Link href="/#offres">
                    <span>Je commence</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
