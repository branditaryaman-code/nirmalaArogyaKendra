import { Building2, ClipboardList, Leaf, UserCheck, Users, type LucideIcon } from "lucide-react";
import { home } from "@/lib/content";

const icons: LucideIcon[] = [Users, Leaf, Building2, UserCheck, ClipboardList];

const rays = Array.from({ length: 36 }, (_, i) => {
  const a = (i * 10 * Math.PI) / 180;
  return { x1: 300 + Math.cos(a) * 130, y1: 300 + Math.sin(a) * 130, x2: 300 + Math.cos(a) * 290, y2: 300 + Math.sin(a) * 290 };
});

export function WhySection() {
  const { eyebrow, title, text, items } = home.why;
  return (
    <section className="section why-dark">
      <svg className="why-dark__art" viewBox="0 0 600 600" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        {[60, 100, 130].map((r) => <circle key={r} cx="300" cy="300" r={r} />)}
        {rays.map((l, i) => <line key={i} {...l} />)}
      </svg>
      <div className="container why-dark__grid">
        <div className="section-head reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <ol className="why-dark__list reveal">
          {items.map(({ lines }, i) => {
            const Icon = icons[i];
            return (
              <li key={lines.join(" ")} className="why-dark__item">
                <span className="why-dark__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{lines.join(" ")}</h3>
                <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
