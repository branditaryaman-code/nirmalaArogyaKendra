"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { bookHref } from "@/lib/site";

export type ExplorerItem = {
  id: string;
  category: string;
  name: string;
  text: string;
  points: string[];
  pointsLabel: string;
  image: string;
  alt: string;
  href: string;
};

export function TreatmentExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  useEffect(() => {
    const apply = () => {
      const i = items.findIndex((item) => item.id === window.location.hash.slice(1));
      if (i >= 0) setActive(i);
    };
    const t = setTimeout(apply, 0);
    window.addEventListener("hashchange", apply);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", apply);
    };
  }, [items]);

  return (
    <div className="tx reveal">
      <ol className="tx__nav" aria-label="Treatments">
        {items.map(({ id, name }, i) => (
          <li key={id}>
            <button
              id={id}
              type="button"
              className={`tx__item${i === active ? " is-active" : ""}`}
              aria-pressed={i === active}
              onClick={(e) => {
                setActive(i);
                e.currentTarget.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
              }}
            >
              <span className="tx__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="tx__name">{name}</span>
              <Icon name="arrow" size={18} />
            </button>
          </li>
        ))}
      </ol>

      <div className="tx__panel">
        <div className="tx__frame">
          {items.map(({ id, image, alt }, i) => (
            <Image
              key={id}
              src={image}
              alt={i === active ? alt : ""}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 900px) 62vw, 100vw"
              className={i === active ? "is-active" : ""}
            />
          ))}
        </div>
        <div className="tx__card" key={current.id} aria-live="polite">
          <p className="eyebrow">{current.category}</p>
          <h2 className="tx__title">{current.name}</h2>
          <p className="lead">{current.text}</p>
          <p className="tx__sub">{current.pointsLabel}</p>
          <ul className="dotlist">
            {current.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <Link href={bookHref} className="link-arrow">Explore Treatment <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </div>
  );
}
