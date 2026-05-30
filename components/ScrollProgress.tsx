"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let rafId = 0;

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        scrollable > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollable))
          : 0;
      if (barRef.current) {
        // Direct DOM transform — bypasses React re-renders + animates on the
        // compositor thread (GPU). scaleX is far smoother than animating width.
        barRef.current.style.transform = `scaleX(${pct})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Re-measure when GSAP/ScrollTrigger extends the document height after mount.
    const observer = new ResizeObserver(onScroll);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] h-[5px] bg-foreground/5"
      aria-hidden
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-primary shadow-[0_-1px_10px_rgba(224,93,56,0.55)] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
