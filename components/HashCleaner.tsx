"use client";

import { useEffect } from "react";

// Watches scroll position. If the URL contains a hash (e.g. /#offres) and
// the targeted element has drifted well outside the viewport — meaning the
// visitor is clearly reading something else — we silently strip the hash
// via history.replaceState. On the next refresh the page no longer auto-
// scrolls back to that anchor; the visitor stays where they were.
//
// Triggered by user scroll only. Hero.tsx's own programmatic scroll to the
// anchor on mount also fires scroll events, but at that point the target
// IS in view so we don't clean it. Safe.
export function HashCleaner() {
  useEffect(() => {
    let scheduled = false;

    const check = () => {
      scheduled = false;
      const hash = window.location.hash;
      if (!hash || hash === "#") return;

      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        // Malformed hash — bail.
        return;
      }
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const isFarAway =
        rect.bottom < -vh * 0.5 || rect.top > vh * 1.5;

      if (isFarAway) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
