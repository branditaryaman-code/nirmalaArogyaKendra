import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { bookHref } from "@/lib/site";

export type DiagnosticsItem = { id: string; name: string; text: string; image: string; alt: string; pos: string; href: string };

export function Wl({ items }: { items: DiagnosticsItem[] }) {
  return (
    <div className="dg-wl">
      {items.map((it, i) => (
        <article key={it.id} id={it.id} className={`dg-wl__item dg-wl__item--${i} reveal`}>
          <Link href={bookHref} className="dg-wl__link">
            <div className="dg-wl__img">
              <Image src={it.image} alt={it.alt} fill sizes="(min-width: 900px) 55vw, 100vw" style={{ objectPosition: it.pos }} />
            </div>
            <div className="dg-wl__body">
              <span className="dg-wl__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{it.name}</h3>
              <p className="muted">{it.text}</p>
              <span className="link-arrow">Enquire <Icon name="arrow" size={16} /></span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
