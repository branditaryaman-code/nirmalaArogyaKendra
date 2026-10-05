"use client";

import { useEffect, useState } from "react";
import { TreatmentExplorer } from "./treatment-explorer";
import { fetchActiveTreatments } from "@/lib/treatments-live";
import type { ExplorerItem } from "./treatment-explorer";

export function TreatmentExplorerLive() {
  const [items, setItems] = useState<ExplorerItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchActiveTreatments()
      .then(setItems)
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <p className="note">Treatments could not be loaded. Please try again shortly.</p>;
  if (items === null) return <p className="note">Loading treatments…</p>;
  if (items.length === 0) return <p className="note">No treatments are available right now.</p>;
  return <TreatmentExplorer items={items} />;
}
