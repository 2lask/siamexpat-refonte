"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FooterItem {
  label: string;
  value: string;
}

interface HeroSection2Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction?: {
    text: string;
    href: string;
  };
  videoUrl?: string;
  backgroundImage?: string;
  footerItems?: FooterItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const HeroSection2 = React.forwardRef<HTMLDivElement, HeroSection2Props>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      videoUrl,
      backgroundImage,
      footerItems,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
          className,
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        {...props}
      >
        <div className="flex w-full flex-col justify-between gap-12 p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
            {(logo || slogan) && (
              <motion.header className="mb-10 md:mb-12" variants={itemVariants}>
                {logo ? (
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.url}
                      alt={logo.alt}
                      className="h-9 w-auto"
                    />
                    <div>
                      {logo.text && (
                        <p className="font-serif text-base font-semibold text-foreground">
                          {logo.text}
                        </p>
                      )}
                      {slogan && (
                        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                          {slogan}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  slogan && (
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary md:text-sm">
                      {slogan}
                    </p>
                  )
                )}
              </motion.header>
            )}

            <motion.div variants={containerVariants}>
              <motion.h1
                className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-[3px] w-20 bg-primary"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              {callToAction && (
                <motion.a
                  href={callToAction.href}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80 md:text-[15px]"
                  variants={itemVariants}
                >
                  {callToAction.text}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              )}
            </motion.div>
          </div>

          {footerItems && footerItems.length > 0 && (
            <motion.footer
              className="w-full border-t border-border pt-6"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {footerItems.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                      {item.label}
                    </p>
                    <p className="mt-1.5 font-serif text-sm font-medium leading-snug text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.footer>
          )}
        </div>

        <motion.div
          className="relative min-h-[360px] w-full overflow-hidden md:min-h-full md:w-1/2 lg:w-2/5"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          whileInView={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "circOut" as const }}
        >
          {videoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-hidden
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : backgroundImage ? (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              aria-hidden
            />
          ) : null}
        </motion.div>
      </motion.section>
    );
  },
);

HeroSection2.displayName = "HeroSection2";

export { HeroSection2 };
