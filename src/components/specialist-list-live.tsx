"use client";

import { useEffect, useState } from "react";
import { SpecialistList } from "./specialist-list";
import { fetchActiveSpecialists, type LiveSpecialist } from "@/lib/specialists-live";

export function SpecialistListLive({ detailed = false }: { detailed?: boolean }) {
  const [items, setItems] = useState<LiveSpecialist[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveSpecialists().then(setItems).catch(() => setError(true));
  }, []);

  if (error) return <p className="note">Specialists could not be loaded. Please try again shortly.</p>;
  if (items === null) return <p className="note">Loading…</p>;
  if (items.length === 0) return <p className="note">No specialists are available right now.</p>;
  return <SpecialistList items={items} detailed={detailed} />;
}
