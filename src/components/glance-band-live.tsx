"use client";

import { useEffect, useState } from "react";
import { GlanceBand, type GlanceCategory } from "./glance-band";
import { fetchActiveTreatments } from "@/lib/treatments-live";

// Column meta (image/CTA) stays fixed; only the grouping and names come from Firestore `treatments`.
const META: Record<string, { image: string; cta: { label: string; href: string } }> = {
  Therapies: { image: "/physiotheraphy.jpg", cta: { label: "Explore therapies", href: "#physiotherapy" } },
  "Holistic Wellness": { image: "/ayurveda.jpg", cta: { label: "Explore Ayurveda", href: "#ayurveda" } },
  "Medical Care": { image: "/orthopaedics.jpg", cta: { label: "Explore Orthopaedics", href: "#orthopaedics" } },
  Diagnostics: { image: "/ecg.jpg", cta: { label: "View diagnostics", href: "/diagnostics" } },
};
const COLUMN_ORDER = ["Therapies", "Holistic Wellness", "Medical Care", "Diagnostics"];

export function GlanceBandLive() {
  const [categories, setCategories] = useState<GlanceCategory[] | null>(null);

  useEffect(() => {
    fetchActiveTreatments()
      .then((items) => {
        const built: GlanceCategory[] = COLUMN_ORDER.map((label) => ({
          label,
          image: META[label].image,
          cta: META[label].cta,
          items: items.filter((t) => t.category === label).map((t) => ({ name: t.name, href: `#${t.id}` })),
        }));
        setCategories(built);
      })
      .catch(() => setCategories([]));
  }, []);

  if (!categories || categories.length === 0) return null;
  return <GlanceBand categories={categories} />;
}
