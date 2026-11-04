"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TARGETS =
  "h1, h2, h3, p, .btn, .pill, .plane, .card, .screen, .s-slot, .s-service, .s-day, .timeline li, .kit div, .rules li, .chat, .specimen, code, [data-inspect]";

const px = (v: string) => Math.round(parseFloat(v));

function rgbToHex(c: string) {
  const m = c.match(/\d+(\.\d+)?/g);
  if (!m || m.length < 3) return c;
  return "#" + m.slice(0, 3).map((n) => Math.round(+n).toString(16).padStart(2, "0")).join("").toUpperCase();
}

/** Toggle that outlines any hovered element with its size, font, color and padding. */
export function Inspect() {
  const [on, setOn] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const tip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!on) return;
    document.body.classList.add("inspecting");

    const hide = () => {
      if (box.current) box.current.hidden = true;
      if (tip.current) tip.current.hidden = true;
    };

    const onMove = (e: PointerEvent) => {
      const b = box.current;
      const t = tip.current;
      const el = (e.target as Element).closest<HTMLElement>(TARGETS);
      if (!b || !t || !el || el.closest(".bar")) return hide();

      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      b.hidden = t.hidden = false;
      Object.assign(b.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });

      const fam = cs.fontFamily.split(",")[0].replace(/["']/g, "");
      const pad = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(px).join(" ");
      t.textContent =
        `${el.dataset.inspect || el.tagName.toLowerCase()}  ${Math.round(r.width)} × ${Math.round(r.height)}\n` +
        `font    ${fam} ${cs.fontWeight} / ${px(cs.fontSize)}px\n` +
        `color   ${rgbToHex(cs.color)}\n` +
        `padding ${pad}`;

      let top = r.top - t.offsetHeight - 8;
      if (top < 60) top = r.bottom + 8;
      const left = Math.min(Math.max(8, r.left), innerWidth - t.offsetWidth - 8);
      Object.assign(t.style, { top: `${top}px`, left: `${left}px` });
    };

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOn(false);

    document.addEventListener("pointermove", onMove);
    document.addEventListener("keydown", onKey);
    addEventListener("scroll", hide, { passive: true });
    return () => {
      document.body.classList.remove("inspecting");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("keydown", onKey);
      removeEventListener("scroll", hide);
    };
  }, [on]);

  return (
    <>
      <button className="inspect-btn" type="button" aria-pressed={on} onClick={() => setOn(!on)}>
        <span className="dot" />
        Inspect
      </button>
      {/* Portaled: the sticky bar's backdrop-filter would otherwise trap position: fixed. */}
      {on &&
        createPortal(
          <>
            <div className="ibox" ref={box} hidden />
            <div className="itip" ref={tip} hidden />
          </>,
          document.body,
        )}
    </>
  );
}
