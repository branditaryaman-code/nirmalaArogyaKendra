"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icons";
import type { ServiceItem } from "./service-feature";

export function DiagnosticsShowcase({ items, head }: { items: ServiceItem[]; head: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="dx reveal">
      <div className="dx__side">
        {head}
        <div className="dx__list" role="group" aria-label="Diagnostic and wellness facilities">
          {items.map(({ name, text }, i) => (
            <button
              key={name}
              type="button"
              className={`dx__item${i === active ? " is-active" : ""}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="dx__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="dx__label">
                <span className="dx__name">{name}</span>
                <span className="dx__text">{text}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <figure className="dx__visual">
        <div className="dx__frame">
          {items.map(({ name, image, alt }, i) => (
            <Image
              key={name}
              src={image}
              alt={i === active ? alt : ""}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 1000px) 56vw, 100vw"
              className={i === active ? "is-active" : ""}
            />
          ))}
        </div>
        <figcaption className="dx__cap">
          <span>{current.text}</span>
          <Link href={current.href} className="link-arrow">Learn More <Icon name="arrow" size={16} /></Link>
        </figcaption>
      </figure>
    </div>
  );
}
