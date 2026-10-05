"use client";

import { useEffect, useRef, useState } from "react";
import { fetchOurApproach } from "@/lib/our-approach-live";

export function OurApproachLive() {
  const [data, setData] = useState<{ eyebrow: string; heading: string; steps: { title: string; text: string }[] } | null | undefined>(undefined);

  useEffect(() => {
    fetchOurApproach().then(setData).catch(() => setData(null));
  }, []);

  if (data === undefined) return <p className="note">Loading…</p>;
  if (data === null || data.steps.length === 0) return <p className="note">This content could not be loaded.</p>;

  return (
    <>
      <div className="section-head reveal">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>{data.heading}</h2>
      </div>
      <ApproachSteps steps={data.steps} />
    </>
  );
}

export function ApproachSteps({ steps }: { steps: { title: string; text: string }[] }) {
  const track = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const step = () => {
    const kids = track.current?.children;
    return kids && kids.length > 1 ? (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft : 0;
  };

  const onScroll = () => {
    const el = track.current;
    const s = step();
    if (el && s) setActive(Math.min(steps.length - 1, Math.round(el.scrollLeft / s)));
  };

  const go = (i: number) => track.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <>
      <ol className="steps reveal" ref={track} onScroll={onScroll}>
        {steps.map(({ title, text }, i) => (
          <li key={title} className="step">
            <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p className="muted">{text}</p>
          </li>
        ))}
      </ol>
      <div className="tx-dots" role="group" aria-label="Choose a step">
        {steps.map(({ title }, i) => (
          <button key={title} type="button" className={i === active ? "is-active" : undefined} aria-label={title} aria-pressed={i === active} onClick={() => go(i)}>
            <span />
          </button>
        ))}
      </div>
    </>
  );
}
