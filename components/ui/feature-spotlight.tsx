"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeaturedSpotlightProps {
  label?: string;
  titleLine1: ReactNode;
  titleLine2: ReactNode;
  description: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  indexNumber?: string;
}

export function FeaturedSpotlight({
  label = "Featured",
  titleLine1,
  titleLine2,
  description,
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc,
  imageAlt,
  indexNumber = "01",
}: FeaturedSpotlightProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <Link
      href={ctaHref}
      className="group relative flex cursor-pointer flex-col items-center gap-8 no-underline md:flex-row md:items-start md:gap-12 lg:gap-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${
        typeof titleLine1 === "string" ? titleLine1 : ""
      } ${typeof titleLine2 === "string" ? titleLine2 : ""} — ${ctaLabel}`}
    >
      {/* LEFT: Text Block */}
      <div className="relative z-10 flex w-full max-w-[360px] shrink-0 flex-col items-center text-center md:w-[280px] md:items-start md:text-left lg:w-[320px] lg:pt-4">
        {/* Label with animated line */}
        <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
          <div
            className="h-px bg-primary transition-all duration-700"
            style={{
              width: isHovered ? 56 : 36,
              transitionTimingFunction: ease,
            }}
          />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary transition-all duration-700 md:text-xs"
            style={{
              letterSpacing: isHovered ? "0.3em" : "0.25em",
              transitionTimingFunction: ease,
            }}
          >
            {label}
          </span>
        </div>

        {/* Title — responsive serif */}
        <h2 className="relative font-serif">
          <span
            className="block text-4xl font-semibold tracking-tight text-foreground transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transitionTimingFunction: ease,
            }}
          >
            {titleLine1}
          </span>
          <span
            className="block text-4xl font-semibold tracking-tight text-primary transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: isHovered ? "translateX(12px)" : "translateX(0)",
              transitionTimingFunction: ease,
            }}
          >
            {titleLine2}
          </span>
        </h2>

        {/* Description */}
        <p
          className="mt-6 max-w-[320px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[260px] md:text-base lg:mt-10 lg:max-w-[300px]"
          style={{
            color: isHovered
              ? "var(--muted-foreground)"
              : "color-mix(in srgb, var(--muted-foreground) 65%, transparent)",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            transitionTimingFunction: ease,
          }}
        >
          {description}
        </p>

        {/* Minimal CTA */}
        <div className="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12"
            style={{
              borderColor: isHovered
                ? "var(--primary)"
                : "color-mix(in srgb, var(--muted-foreground) 35%, transparent)",
              backgroundColor: isHovered ? "var(--primary)" : "transparent",
              color: isHovered ? "var(--primary-foreground)" : "var(--foreground)",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered
                ? "0 8px 32px color-mix(in srgb, var(--primary) 25%, transparent)"
                : "0 0 0 transparent",
              transitionTimingFunction: ease,
            }}
          >
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4"
              style={{
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                transitionTimingFunction: ease,
              }}
            />
          </div>
          <span
            className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs"
            style={{
              color: "var(--foreground)",
              opacity: isHovered ? 1 : 0.5,
              transform: isHovered ? "translateX(0)" : "translateX(-8px)",
              transitionTimingFunction: ease,
              transitionDelay: isHovered ? "100ms" : "0ms",
            }}
          >
            {ctaLabel}
          </span>
        </div>
      </div>

      {/* RIGHT: Image Block */}
      <div
        className="relative transition-all duration-700"
        style={{
          transform: isHovered
            ? "translateX(4px) translateY(-4px)"
            : "translateX(0) translateY(0)",
          transitionTimingFunction: ease,
        }}
      >
        {/* Frame outline */}
        <div
          className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
          style={{
            borderColor: isHovered
              ? "color-mix(in srgb, var(--primary) 30%, transparent)"
              : "transparent",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            transitionTimingFunction: ease,
          }}
        />

        {/* Image container */}
        <div className="relative h-[320px] w-[280px] overflow-hidden sm:h-[360px] sm:w-[320px] md:h-[400px] md:w-[340px] lg:h-[460px] lg:w-[400px]">
          <div
            className="absolute -inset-1 transition-all duration-700"
            style={{
              boxShadow: isHovered
                ? "0 24px 64px color-mix(in srgb, var(--foreground) 12%, transparent)"
                : "0 0 0 transparent",
              transitionTimingFunction: ease,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover transition-all duration-1000"
            style={{
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              transitionTimingFunction: ease,
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-700"
            style={{
              opacity: isHovered ? 1 : 0,
              transitionTimingFunction: ease,
            }}
          />

          {/* Corner accents */}
          <div
            className="absolute left-2 top-2 h-5 w-px bg-white/85 transition-all duration-500 md:left-3 md:top-3 md:h-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transitionTimingFunction: ease,
              transitionDelay: "50ms",
            }}
          />
          <div
            className="absolute left-2 top-2 h-px w-5 bg-white/85 transition-all duration-500 md:left-3 md:top-3 md:w-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transitionTimingFunction: ease,
              transitionDelay: "100ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-5 w-px bg-white/85 transition-all duration-500 md:bottom-3 md:right-3 md:h-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom",
              transitionTimingFunction: ease,
              transitionDelay: "150ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-px w-5 bg-white/85 transition-all duration-500 md:bottom-3 md:right-3 md:w-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "right",
              transitionTimingFunction: ease,
              transitionDelay: "200ms",
            }}
          />
        </div>

        {/* Index number */}
        <span
          className="absolute -bottom-6 right-0 font-mono text-xs text-muted-foreground transition-all duration-700 md:-bottom-8 md:text-sm"
          style={{
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? "translateY(12px)" : "translateY(0)",
            transitionTimingFunction: ease,
          }}
        >
          {indexNumber}
        </span>
      </div>
    </Link>
  );
}
