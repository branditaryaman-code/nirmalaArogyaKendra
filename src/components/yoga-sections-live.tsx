"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchYogaBatches, fetchYogaIntro, type YogaBatch, type YogaBlock } from "@/lib/yoga-live";

export function YogaWhatLive({ eyebrow, note }: { eyebrow: string; note: string }) {
  const [data, setData] = useState<YogaBlock | null | undefined>(undefined);

  useEffect(() => {
    fetchYogaIntro().then(setData).catch(() => setData(null));
  }, []);

  if (data === undefined) return <p className="note">Loading…</p>;
  if (data === null) return <p className="note">This content could not be loaded.</p>;

  return (
    <>
      <figure className="yg-what__img reveal">
        <div className="yg-what__frame">
          <Image src={data.image} alt={data.heading} fill sizes="(min-width: 900px) 34vw, 100vw" />
        </div>
      </figure>
      <div className="yg-what__text reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{data.heading}</h2>
        <p className="lead">{data.description}</p>
        <p className="note">{note}</p>
      </div>
    </>
  );
}

export function YogaBatchesLive() {
  const [batches, setBatches] = useState<YogaBatch[] | null>(null);

  useEffect(() => {
    fetchYogaBatches().then(setBatches).catch(() => setBatches([]));
  }, []);

  if (batches === null) return <li className="note">Loading…</li>;
  if (batches.length === 0) return <li className="note">No batches are available right now.</li>;

  return (
    <>
      {batches.map(({ batch, time, days }, i) => (
        <li key={batch + i}><span>{batch}</span><span>{time}</span><span>{days}</span></li>
      ))}
    </>
  );
}
