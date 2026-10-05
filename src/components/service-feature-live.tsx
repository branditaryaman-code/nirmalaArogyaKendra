"use client";

import { useEffect, useState } from "react";
import { ServiceFeature, type ServiceItem } from "./service-feature";
import { fetchActiveTreatments } from "@/lib/treatments-live";

export function ServiceFeatureLive() {
  const [items, setItems] = useState<ServiceItem[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveTreatments().then(setItems).catch(() => setError(true));
  }, []);

  if (error) return <p className="note">Services could not be loaded. Please try again shortly.</p>;
  if (items === null) return <p className="note">Loading…</p>;
  if (items.length === 0) return <p className="note">No services are available right now.</p>;
  return <ServiceFeature items={items} />;
}
