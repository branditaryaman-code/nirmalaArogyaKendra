"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { testimonialsImage } from "@/lib/content";
import { fetchActiveTestimonials, type LiveTestimonial } from "@/lib/testimonials-live";

export function TestimonialCarousel({ head }: { head: React.ReactNode }) {
  const [testimonials, setTestimonials] = useState<LiveTestimonial[] | null>(null);
  const [error, setError] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetchActiveTestimonials().then(setTestimonials).catch(() => setError(true));
  }, []);

  const go = (dir: 1 | -1) => setI((i + dir + testimonials!.length) % testimonials!.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="voices reveal" role="region" aria-roledescription="carousel" aria-label="Patient testimonials">
      <div className="voices__img">
        <Image src={testimonialsImage.src} alt={testimonialsImage.alt} fill sizes="(min-width: 900px) 34vw, 100vw" />
      </div>
      <div className="voices__body">
        {head}
        {error ? (
          <p className="note">Testimonials could not be loaded. Please try again shortly.</p>
        ) : testimonials === null ? (
          <p className="note">Loading…</p>
        ) : testimonials.length === 0 ? (
          <p className="note">No testimonials are available right now.</p>
        ) : (
          <>
            <figure className="voices__quote" aria-live="polite">
              <blockquote key={i}>
                <p>{testimonials[i].quote}</p>
              </blockquote>
              <figcaption>
                <strong>{testimonials[i].name}</strong>
              </figcaption>
            </figure>
            <div className="voices__controls">
              <span className="voices__count">{pad(i + 1)} <span>/ {pad(testimonials.length)}</span></span>
              <button type="button" className="sq-btn sq-btn--prev" onClick={() => go(-1)} aria-label="Previous testimonial"><Icon name="arrow" size={18} /></button>
              <button type="button" className="sq-btn" onClick={() => go(1)} aria-label="Next testimonial"><Icon name="arrow" size={18} /></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
