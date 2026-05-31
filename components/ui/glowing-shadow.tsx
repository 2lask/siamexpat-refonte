"use client";

import { Fragment, useState, type ReactNode } from "react";

// Wraps any element with an orange glow that only activates while the
// pointer is in contact (mouse-over on desktop, finger-down on mobile).
// As soon as the finger lifts or the cursor leaves, the glow fades out.
// No idle animation — the wrap is invisible at rest.

const STYLES = `
@property --rotate { syntax: "<number>"; inherits: true; initial-value: 0; }
@property --bg-x { syntax: "<number>"; inherits: true; initial-value: 0; }
@property --bg-y { syntax: "<number>"; inherits: true; initial-value: 0; }
@property --bg-size { syntax: "<number>"; inherits: true; initial-value: 0; }
@property --gs-opacity { syntax: "<number>"; inherits: true; initial-value: 0; }
@property --glow-blur { syntax: "<number>"; inherits: true; initial-value: 6; }
@property --glow-scale { syntax: "<number>"; inherits: true; initial-value: 1.5; }
@property --glow-translate-y { syntax: "<number>"; inherits: true; initial-value: -65; }

.gs-wrap {
  --gs-color: var(--primary);
  --gs-border: 2px;
  --gs-anim-speed: 5s;
  --gs-interact-speed: 0.5s;

  position: relative;
  z-index: 0;
  border-radius: inherit;
  isolation: isolate;
  transition:
    --bg-size var(--gs-interact-speed) ease,
    --gs-opacity var(--gs-interact-speed) ease,
    --glow-blur var(--gs-interact-speed) ease,
    --glow-scale var(--gs-interact-speed) ease;
}

.gs-wrap::before {
  content: "";
  position: absolute;
  inset: calc(var(--gs-border) * -1);
  border-radius: inherit;
  background: radial-gradient(
    35% 35% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
    color-mix(in oklch, var(--gs-color) 95%, white) calc(0% * var(--bg-size)),
    color-mix(in oklch, var(--gs-color) 75%, white) calc(18% * var(--bg-size)),
    var(--gs-color) calc(38% * var(--bg-size)),
    transparent 100%
  );
  opacity: var(--gs-opacity);
  z-index: -1;
  pointer-events: none;
  transition:
    --bg-size var(--gs-interact-speed) ease,
    opacity var(--gs-interact-speed) ease;
}

.gs-glow {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 22%;
  aspect-ratio: 1 / 1;
  transform: rotateZ(calc(var(--rotate) * 1deg));
  transform-origin: center;
  border-radius: 50%;
  z-index: -2;
  pointer-events: none;
  opacity: var(--gs-opacity);
  transition: opacity var(--gs-interact-speed) ease;
}

.gs-glow::after {
  content: "";
  position: absolute;
  inset: -15%;
  background: var(--gs-color);
  filter: blur(calc(var(--glow-blur) * 10px));
  border-radius: 50%;
  transform:
    scaleY(calc(var(--glow-scale) / 1.1))
    scaleX(calc(var(--glow-scale) * 1.2))
    translateY(calc(var(--glow-translate-y) * 1%));
  transition:
    --glow-blur var(--gs-interact-speed) ease,
    --glow-scale var(--gs-interact-speed) ease;
}

.gs-wrap.is-active {
  --bg-size: 15;
  --gs-opacity: 0.7;
  --glow-blur: 1.8;
  --glow-scale: 2.4;
}

.gs-wrap.is-active::before {
  animation: gs-rotate-bg var(--gs-anim-speed) linear infinite;
}

.gs-wrap.is-active .gs-glow {
  animation: gs-rotate-glow var(--gs-anim-speed) linear infinite;
}

@keyframes gs-rotate-bg {
  0%   { --bg-x: 0;   --bg-y: 0;   }
  25%  { --bg-x: 100; --bg-y: 0;   }
  50%  { --bg-x: 100; --bg-y: 100; }
  75%  { --bg-x: 0;   --bg-y: 100; }
  100% { --bg-x: 0;   --bg-y: 0;   }
}

@keyframes gs-rotate-glow {
  from { --rotate: -70;  }
  to   { --rotate: 290;  }
}
`;

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
}

export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  const [active, setActive] = useState(false);

  const on = () => setActive(true);
  const off = () => setActive(false);

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        className={`gs-wrap ${active ? "is-active" : ""} ${className}`.trim()}
        onPointerEnter={on}
        onPointerLeave={off}
        onPointerUp={off}
        onPointerCancel={off}
      >
        <span className="gs-glow" aria-hidden />
        {children}
      </div>
    </Fragment>
  );
}
