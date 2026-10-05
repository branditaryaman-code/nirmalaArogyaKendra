"use client";

import { useEffect, useState } from "react";
import { Wl, type DiagnosticsItem } from "./diagnostics-wl";
import { fetchActiveDiagnosticsBySection } from "@/lib/diagnostics-live";

type Groups = { diagnostics: DiagnosticsItem[]; wellness: DiagnosticsItem[] };

function Body({ error, items, empty }: { error: boolean; items: DiagnosticsItem[] | undefined; empty: string }) {
  if (error) return <p className="note">This section could not be loaded. Please try again shortly.</p>;
  if (!items) return <p className="note">Loading…</p>;
  if (items.length === 0) return <p className="note">{empty}</p>;
  return <Wl items={items} />;
}

export function DiagnosticsSectionsLive() {
  const [groups, setGroups] = useState<Groups | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveDiagnosticsBySection()
      .then(setGroups)
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <section className="section section--white dg-diag">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Diagnostics</p>
          </div>
          <Body error={error} items={groups?.diagnostics} empty="No diagnostics are available right now." />
        </div>
      </section>

      <section className="section dg-wellness">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Wellness</p>
          </div>
          <Body error={error} items={groups?.wellness} empty="No wellness services are available right now." />
        </div>
      </section>
    </>
  );
}
