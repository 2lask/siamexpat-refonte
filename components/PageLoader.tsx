"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Branded splash that covers the initial page paint. Stays up at least
// ~900ms so the logo registers, then fades out when the window has
// finished loading (or after a 3s safety fallback). Disappears entirely
// from the DOM once the fade is complete.
export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const MIN_DISPLAY = 900;
    const FALLBACK = 3000;
    const start = performance.now();

    const triggerHide = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY - elapsed);
      window.setTimeout(() => setHidden(true), remaining);
    };

    if (document.readyState === "complete") {
      triggerHide();
    } else {
      window.addEventListener("load", triggerHide, { once: true });
    }
    const fallback = window.setTimeout(triggerHide, FALLBACK);

    return () => {
      window.removeEventListener("load", triggerHide);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 800);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-foreground transition-opacity duration-700 ease-out ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
      role="status"
      aria-label="Chargement"
    >
      <div className="flex flex-col items-center gap-7">
        <div className="page-loader-logo">
          <Image
            src="/logo.png"
            alt="Siam Expat"
            width={140}
            height={56}
            priority
            className="h-14 w-auto brightness-0 invert"
          />
        </div>
        <div className="flex gap-1.5">
          <span className="page-loader-dot page-loader-dot-1 h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="page-loader-dot page-loader-dot-2 h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="page-loader-dot page-loader-dot-3 h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
