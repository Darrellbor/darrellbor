"use client";

import { useRef, useState } from "react";

const LAYERS = [
  { id: "tokens", label: "Design tokens" },
  { id: "comp", label: "Components" },
  { id: "api", label: "API" },
  { id: "db", label: "Database" },
] as const;

type LayerId = (typeof LAYERS)[number]["id"];

export function LayerStack() {
  const stage = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState<LayerId | null>(null);
  const [hovered, setHovered] = useState<LayerId | null>(null);
  const active = hovered ?? pinned;

  function tilt(e: React.PointerEvent<HTMLDivElement>) {
    const el = stage.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tz", `${(x * 14).toFixed(2)}deg`);
    el.style.setProperty("--tx", `${(-y * 10).toFixed(2)}deg`);
  }

  function resetTilt() {
    stage.current?.style.setProperty("--tz", "0deg");
    stage.current?.style.setProperty("--tx", "0deg");
  }

  const plane = (id: LayerId) => `plane p-${id}${active === id ? " on" : ""}`;

  return (
    <div className="stage-wrap">
      <div className="stage" ref={stage} onPointerMove={tilt} onPointerLeave={resetTilt} aria-hidden="true">
        <div className="scaler">
          <div className="stack">
            <div className={plane("db")}>
              <span className="tag">postgres</span>
              <pre className="code">
                <span className="k">EXCLUDE USING</span> gist ({"\n"}
                {"  "}staff_id <span className="k">WITH</span> =,{"\n"}
                {"  "}slot{"     "}<span className="k">WITH</span> &amp;&amp;{"\n"}
                )
              </pre>
            </div>
            <div className={plane("api")}>
              <span className="tag">api</span>
              <pre className="code">
                <span className="k">POST</span> /v1/bookings{"\n"}
                <span className="c">Idempotency-Key: 7f3c…</span>{"\n"}
                <span className="ok">201 Created</span>
              </pre>
            </div>
            <div className={plane("comp")}>
              <span className="tag">components</span>
              <span className="mini-btn">Book a slot</span>
              <div className="mini-row">
                <span className="mini-toggle" />
                <span className="mini-input" />
              </div>
            </div>
            <div className={plane("tokens")}>
              <span className="tag">tokens</span>
              <div className="tok-grid">
                {["--accent", "--fg", "--redline", "--bg", "--muted", "--surface"].map((t) => (
                  <i key={t} style={{ background: `var(${t})` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="label layers-title">Layers</p>
        <ul className="layers">
          {LAYERS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={active === id ? "on" : undefined}
                aria-pressed={pinned === id}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
                onClick={() => setPinned((p) => (p === id ? null : id))}
              >
                <span className="sq" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
