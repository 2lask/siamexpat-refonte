"use client";

import { useEffect } from "react";

const SCROLL_KEY = "homeScrollY";
const RESTORE_FLAG = "shouldRestoreHomeScroll";

// Mounted once on the home page. Saves the current scroll position to
// sessionStorage as the user moves around, and — if the user just clicked
// "Retour à l'accueil" on a secondary page — restores them to the exact
// pixel offset they were at when they left.
export function HomeScrollMemory() {
  useEffect(() => {
    let scheduled = false;
    const saveScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
        scheduled = false;
      });
    };

    const shouldRestore = sessionStorage.getItem(RESTORE_FLAG);
    if (shouldRestore) {
      sessionStorage.removeItem(RESTORE_FLAG);
      const savedY = parseInt(sessionStorage.getItem(SCROLL_KEY) ?? "0", 10);
      if (savedY > 0) {
        if ("scrollRestoration" in history) {
          history.scrollRestoration = "manual";
        }
        // GSAP/ScrollTrigger needs a few frames to settle before our scroll
        // sticks. Retry a handful of times if the position drifts.
        let attempts = 0;
        const tryScroll = () => {
          window.scrollTo(0, savedY);
          attempts += 1;
          if (attempts < 25 && Math.abs(window.scrollY - savedY) > 4) {
            requestAnimationFrame(tryScroll);
          }
        };
        requestAnimationFrame(() => requestAnimationFrame(tryScroll));
      }
    }

    window.addEventListener("scroll", saveScroll, { passive: true });
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  return null;
}
