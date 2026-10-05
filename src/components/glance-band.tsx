"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Icon } from "./icons";

export type GlanceCategory = {
  label: string;
  image: string;
  cta: { label: string; href: string };
  items: { name: string; href: string; id?: string }[];
};

function Anchor({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith("#") ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

export function GlanceBand({ categories }: { categories: GlanceCategory[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const step = () => {
    const kids = track.current?.children;
    return kids && kids.length > 1 ? (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft : 0;
  };

  const onScroll = () => {
    const el = track.current;
    const s = step();
    if (el && s) setActive(Math.min(categories.length - 1, Math.round(el.scrollLeft / s)));
  };

  const go = (i: number) => track.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <div className="tx-glance">
      <div className="tx-cats reveal" ref={track} onScroll={onScroll}>
        {categories.map(({ label, image, cta, items }) => (
          <div key={label} className="tx-cat">
            <div className="tx-cat__head">
              <span className="tx-cat__thumb"><Image src={image} alt="" fill sizes="64px" /></span>
              <h2 className="tx-cat__label">{label}</h2>
            </div>
            <ul>
              {items.map(({ name, href, id }) => (
                <li key={name} id={id}><Anchor href={href}>{name}</Anchor></li>
              ))}
            </ul>
            <Anchor href={cta.href} className="link-arrow tx-cat__cta">{cta.label} <Icon name="arrow" size={16} /></Anchor>
          </div>
        ))}
      </div>
      <div className="tx-dots" role="group" aria-label="Choose a category">
        {categories.map(({ label }, i) => (
          <button key={label} type="button" className={i === active ? "is-active" : undefined} aria-label={label} aria-pressed={i === active} onClick={() => go(i)}>
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
