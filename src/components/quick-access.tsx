"use client";

import { useEffect, useState } from "react";

type Group = { label: string; items: { name: string; id: string }[] };

export function QuickAccess({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = groups.flatMap((g) => g.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [groups]);

  return (
    <nav className="dg-quick" aria-label="Quick access">
      {groups.map(({ label, items }) => (
        <div key={label} className="dg-quick__group">
          <h2 className="dg-quick__label">{label}</h2>
          <ul>
            {items.map(({ name, id }) => (
              <li key={id}>
                <a href={`#${id}`} className={id === active ? "is-active" : undefined} aria-current={id === active ? "true" : undefined}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
