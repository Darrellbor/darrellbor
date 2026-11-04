"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const code = useRef<HTMLElement>(null);
  const [label, setLabel] = useState("Copy email");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
      setTimeout(() => setLabel("Copy email"), 1800);
    } catch {
      // Clipboard blocked: select the text so the user can copy it themselves.
      const r = document.createRange();
      r.selectNodeContents(code.current!);
      getSelection()?.removeAllRanges();
      getSelection()?.addRange(r);
      setLabel("Selected, press copy");
    }
  }

  return (
    <div className="mail">
      <code ref={code}>{email}</code>
      <button className="btn" type="button" onClick={copy} aria-live="polite">
        {label}
      </button>
    </div>
  );
}
