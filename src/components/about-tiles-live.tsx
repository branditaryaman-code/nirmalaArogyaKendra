"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchActiveDiagnosticsBySection } from "@/lib/diagnostics-live";
import { fetchActiveTreatments } from "@/lib/treatments-live";

type Tile = { id: string; name: string; text: string; image: string; alt: string };

function Tiles({ items, error, empty }: { items: Tile[] | null; error: boolean; empty: string }) {
  if (error) return <p className="note">This section could not be loaded. Please try again shortly.</p>;
  if (items === null) return <p className="note">Loading…</p>;
  if (items.length === 0) return <p className="note">{empty}</p>;
  return (
    <ul className="ab-tiles reveal">
      {items.map((it) => (
        <li key={it.id} className="ab-tile">
          <div className="ab-tile__img">
            <Image src={it.image} alt={it.alt} fill sizes="(min-width: 900px) 30vw, 90vw" />
          </div>
          <div className="ab-tile__body">
            <h3>{it.name}</h3>
            <p className="muted">{it.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function AboutTreatmentsTiles() {
  const [items, setItems] = useState<Tile[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveTreatments().then(setItems).catch(() => setError(true));
  }, []);

  return <Tiles items={items} error={error} empty="No treatments are available right now." />;
}

export function AboutDiagnosticsTiles() {
  const [items, setItems] = useState<Tile[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveDiagnosticsBySection()
      .then((groups) => setItems([...groups.diagnostics, ...groups.wellness]))
      .catch(() => setError(true));
  }, []);

  return <Tiles items={items} error={error} empty="No diagnostics are available right now." />;
}
