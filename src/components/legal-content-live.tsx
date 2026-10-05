"use client";

import { useEffect, useState } from "react";
import { fetchLegalContent } from "@/lib/legal-live";

export function LegalContentLive({ id, fallback }: { id: string; fallback: React.ReactNode }) {
  const [content, setContent] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    fetchLegalContent(id).then(setContent).catch(() => setContent(null));
  }, [id]);

  if (content === undefined) return <p className="note">Loading…</p>;
  if (content === null) return <>{fallback}</>;
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
