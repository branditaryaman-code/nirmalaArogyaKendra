import { Building2, HeartHandshake, Layers, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutStoryLive } from "@/components/about-story-live";
import { AboutDiagnosticsTiles, AboutTreatmentsTiles } from "@/components/about-tiles-live";
import { Icon } from "@/components/icons";
import { PageBannerLive } from "@/components/page-banner-live";
import { Rings } from "@/components/rings";
import { about } from "@/lib/content";
import { bookHref } from "@/lib/site";

export const metadata: Metadata = { title: "About Us", description: about.hero.text };

const principleIcons: LucideIcon[] = [Building2, Layers, HeartHandshake];

export default function About() {
  const { hero, story, approach, quote, people, cta } = about;

  return (
    <>
      <PageBannerLive page="About Us" image="/store.png" position="50% 24%" crumb="About Us" label={hero.label} title={hero.title} text={hero.text} />

      <section className="section">
        <div className="container ab-story">
          <AboutStoryLive
            eyebrow={story.eyebrow}
            fallbackImage="/orthopaedics.jpg"
            fallbackAlt="Doctor examining a patient in a clinic room"
            panel={story.panel}
          />
        </div>
      </section>

      <section className="section section--white">
        <div className="container ab-approach">
          <h2 className="reveal">
            {approach.lines.map((l) => <span key={l}>{l}</span>)}
          </h2>
          <ul className="ab-principles reveal">
            {approach.items.map(({ title, text }, i) => {
              const PrincipleIcon = principleIcons[i];
              return (
                <li key={title} className="ab-principle">
                  <PrincipleIcon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p className="muted">{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Treatments</p>
            <h2>Explore Our Treatments</h2>
          </div>
          <AboutTreatmentsTiles />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Diagnostics</p>
            <h2>Diagnostic Facilities</h2>
          </div>
          <AboutDiagnosticsTiles />
        </div>
      </section>

      <section className="ab-quote">
        <div className="ab-quote__img">
          <Image src="/physiotheraphy.jpg" alt="Physiotherapist working with a patient" fill sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
        <div className="ab-quote__body reveal">
          <Rings className="ab-quote__rings" />
          <blockquote>
            <p>{quote}</p>
          </blockquote>
          <p className="ab-quote__by">Nirmala Arogya Kendra</p>
        </div>
      </section>

      <section className="section">
        <div className="container ab-people">
          <div className="ab-people__text reveal">
            <p className="eyebrow">People &amp; Care</p>
            <h2>{people.title}</h2>
            <p className="lead">{people.text}</p>
            <Link href="/specialists" className="link-arrow">Our Specialists <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="ab-mosaic reveal">
            <div className="ab-mosaic__tall">
              <Image src="/accupuncture.jpg" alt="Practitioner giving a therapy session" fill sizes="(min-width: 900px) 28vw, 45vw" />
            </div>
            <div className="ab-mosaic__cell">
              <Image src="/diet.jpg" alt="Nutrition specialist with fresh fruit and notes" fill sizes="(min-width: 900px) 24vw, 40vw" />
            </div>
            <div className="ab-mosaic__cell">
              <Image src="/yoga.jpg" alt="Person practising yoga on a mat" fill sizes="(min-width: 900px) 24vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band ab-cta">
        <Rings className="ab-rings ab-rings--cta" />
        <div className="container">
          <h2>{cta.title}</h2>
          <p className="lead">{cta.text}</p>
          <div className="btn-row">
            <Link href="/treatments" className="btn btn--primary">Explore Our Services</Link>
            <Link href={bookHref} className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
