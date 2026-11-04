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

    let current: HTMLElement | null = null;

    const hide = () => {
      current = null;
      if (box.current) box.current.hidden = true;
      if (tip.current) tip.current.hidden = true;
    };

    // Outside the bar, so the Inspect toggle itself stays clickable.
    const targetOf = (e: Event) => {
      const el = (e.target as Element).closest<HTMLElement>(TARGETS);
      return el && !el.closest(".bar") ? el : null;
    };

    const show = (el: HTMLElement | null) => {
      const b = box.current;
      const t = tip.current;
      if (!b || !t || !el) return hide();
      current = el;

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

    // Mouse hovers; touch has no hover, so a tap selects instead.
    const onMove = (e: PointerEvent) => e.pointerType === "mouse" && show(targetOf(e));
    const onDown = (e: PointerEvent) => e.pointerType !== "mouse" && show(targetOf(e));
    // While inspecting, a tap or click on a link or button inspects it instead of following it.
    const onClick = (e: MouseEvent) => targetOf(e) && e.preventDefault();
    const onScroll = () => current && show(current);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOn(false);

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.body.classList.remove("inspecting");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
      removeEventListener("scroll", onScroll);
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
