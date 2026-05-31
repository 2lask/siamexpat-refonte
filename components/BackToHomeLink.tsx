"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface BackToHomeLinkProps {
  className?: string;
  children: ReactNode;
}

// Drop-in replacement for <Link href="/"> that flags the upcoming home
// mount so HomeScrollMemory restores the visitor's previous scroll offset
// instead of dropping them at the top.
export function BackToHomeLink({ className, children }: BackToHomeLinkProps) {
  return (
    <Link
      href="/"
      className={className}
      onClick={() => {
        try {
          sessionStorage.setItem("shouldRestoreHomeScroll", "1");
        } catch {
          // sessionStorage may be unavailable (private mode, locked-down
          // browsers) — falling through still navigates home, just without
          // scroll restoration. Acceptable degradation.
        }
      }}
    >
      {children}
    </Link>
  );
}
