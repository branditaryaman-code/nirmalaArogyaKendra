"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { fetchBanners, type LiveBanner } from "@/lib/banners-live";
import { home } from "@/lib/content";
import { bookHref } from "@/lib/site";

const fallback: LiveBanner = {
  label: home.hero.label,
  title: home.hero.title,
  text: home.hero.text,
  image: home.hero.image,
  button1Text: "Contact Us",
  button1Link: bookHref,
  button2Text: "Explore Our Services",
  button2Link: "/treatments",
};

export function HeroBannerLive() {
  const [banners, setBanners] = useState<LiveBanner[]>([fallback]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetchBanners("Home").then((rows) => {
      if (rows.length) setBanners(rows);
    });
  }, []);

  useEffect(() => {
    if (banners.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % banners.length), 6000);
    return () => clearInterval(t);
  }, [banners.length]);

  const data = banners[i];
  const go = (dir: 1 | -1) => setI((n) => (n + dir + banners.length) % banners.length);

  return (
    <section className="hero">
      <Image src={data.image || home.hero.image} alt="" fill priority sizes="100vw" className="hero__bg" />
      <div className="hero__overlay" />
      <div className="container">
        <div className="hero__content rise">
          <p className="hero__label">{data.label}</p>
          <h1>{data.title}</h1>
          <p className="hero__lead">{data.text}</p>
          <div className="hero__actions">
            {data.button1Text && <Link href={data.button1Link || bookHref} className="btn btn--gold">{data.button1Text}</Link>}
            {data.button2Text && (
              <Link href={data.button2Link || "/treatments"} className="hero__link">
                {data.button2Text} <Icon name="arrow" size={16} />
              </Link>
            )}
          </div>
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
        </div>
      </div>
    </section>
  );
}
