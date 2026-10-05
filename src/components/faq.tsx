"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { fetchActiveFaqs, type LiveFaq } from "@/lib/faqs-live";

export function Faq() {
  const [faqs, setFaqs] = useState<LiveFaq[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveFaqs().then(setFaqs).catch(() => setError(true));
  }, []);

  if (error) return <p className="note">FAQs could not be loaded. Please try again shortly.</p>;
  if (faqs === null) return <p className="note">Loading…</p>;
  if (faqs.length === 0) return <p className="note">No FAQs are available right now.</p>;

  return (
    <div className="faq reveal">
      {faqs.map(({ q, a }) => (
        <details key={q} className="faq__item">
          <summary>
            {q}
            <Icon name="chevron" size={20} />
          </summary>
          <p className="muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
