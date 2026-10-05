"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAboutStory, type AboutBlock } from "@/lib/about-live";

export function AboutStoryLive({
  eyebrow,
  fallbackImage,
  fallbackAlt,
  panel,
}: {
  eyebrow: string;
  fallbackImage: string;
  fallbackAlt: string;
  panel: { label: string; text: string };
}) {
  const [data, setData] = useState<AboutBlock | null | undefined>(undefined);

  useEffect(() => {
    fetchAboutStory().then(setData).catch(() => setData(null));
  }, []);

  return (
    <>
      <figure className="ab-story__img reveal">
        <Image
          src={data?.image || fallbackImage}
          alt={fallbackAlt}
          width={1024}
          height={677}
          sizes="(min-width: 900px) 58vw, 100vw"
          className="media"
        />
        <div className="ab-panel">
          <p className="ab-panel__label">{panel.label}</p>
          <p className="ab-panel__text">{panel.text}</p>
        </div>
      </figure>
      <div className="ab-story__text reveal">
        <p className="eyebrow">{eyebrow}</p>
        {data === undefined ? (
          <p className="note">Loading…</p>
        ) : data === null ? (
          <p className="note">This content could not be loaded.</p>
        ) : (
          <>
            <h2>{data.heading}</h2>
            <p className="lead">{data.description}</p>
          </>
        )}
      </div>
    </>
  );
}
