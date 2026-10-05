"use client";

import { useEffect, useState } from "react";
import { DiagnosticsShowcase } from "./diagnostics-showcase";
import type { ServiceItem } from "./service-feature";
import { fetchActiveDiagnosticsBySection } from "@/lib/diagnostics-live";

export function DiagnosticsShowcaseLive({ head }: { head: React.ReactNode }) {
  const [items, setItems] = useState<ServiceItem[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveDiagnosticsBySection()
      .then((groups) => setItems([...groups.diagnostics, ...groups.wellness]))
      .catch(() => setError(true));
  }, []);

  if (error) return <>{head}<p className="note">This section could not be loaded. Please try again shortly.</p></>;
  if (items === null) return <>{head}<p className="note">Loading…</p></>;
  if (items.length === 0) return <>{head}<p className="note">No facilities are available right now.</p></>;
  return <DiagnosticsShowcase items={items} head={head} />;
}
