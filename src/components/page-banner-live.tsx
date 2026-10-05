"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { PageBanner } from "./page-banner";
import { fetchBanners, type LiveBanner } from "@/lib/banners-live";

export function PageBannerLive({
  page,
  image,
  position,
  crumb,
  label,
  title,
  text,
}: {
  page: string;
  image: string;
  position?: string;
  crumb: string;
  label: string;
  title: string;
  text?: string;
}) {
  const fallback: LiveBanner = { label, title, text: text ?? "", image, button1Text: "", button1Link: "", button2Text: "", button2Link: "" };
  const [banners, setBanners] = useState<LiveBanner[]>([fallback]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetchBanners(page).then((rows) => {
      if (rows.length) setBanners(rows);
    });
  }, [page]);

  useEffect(() => {
    if (banners.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % banners.length), 6000);
    return () => clearInterval(t);
  }, [banners.length]);

  const data = banners[i];
  const go = (dir: 1 | -1) => setI((n) => (n + dir + banners.length) % banners.length);

  return (
    <PageBanner image={data.image || image} position={position} crumb={crumb} label={data.label || label} title={data.title || title} text={data.text || text}>
      {banners.length > 1 && (
        <div className="hero__slider">
          <div className="tx-dots">
            {banners.map((b, idx) => (
              <button key={b.title + idx} type="button" className={idx === i ? "is-active" : undefined} aria-label={`Banner ${idx + 1}`} aria-pressed={idx === i} onClick={() => setI(idx)}>
                <span />
              </button>
            ))}
          </div>
          <button type="button" className="sq-btn sq-btn--prev" onClick={() => go(-1)} aria-label="Previous banner"><Icon name="arrow" size={16} /></button>
          <button type="button" className="sq-btn" onClick={() => go(1)} aria-label="Next banner"><Icon name="arrow" size={16} /></button>
        </div>
      )}
    </PageBanner>
  );
}
