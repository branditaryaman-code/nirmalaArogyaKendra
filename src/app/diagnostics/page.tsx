import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DiagnosticsSectionsLive } from "@/components/diagnostics-sections-live";
import { PageBannerLive } from "@/components/page-banner-live";
import { QuickAccess } from "@/components/quick-access";
import { Rings } from "@/components/rings";
import { diagnosticsPage } from "@/lib/content";
import { bookHref } from "@/lib/site";

export const metadata: Metadata = { title: "Diagnostics & Wellness", description: diagnosticsPage.hero.text };

export default function Diagnostics() {
  const { hero, intro, feature, philosophy, quick, cta } = diagnosticsPage;

  return (
    <>
      <PageBannerLive page="Diagnostics" image={hero.image} position="60% 50%" crumb="Diagnostics & Wellness" label={hero.label} title={hero.title} text={hero.text} />

      <section className="section dg-introwrap">
        <div className="container dg-intro">
          <h2 className="reveal">{intro.title}</h2>
          <p className="lead reveal">{intro.text}</p>
        </div>
      </section>

      <DiagnosticsSectionsLive />

      <section className="dg-feature">
        <div className="dg-feature__img">
          <Image src={feature.image} alt={feature.alt} fill sizes="(min-width: 900px) 62vw, 100vw" />
        </div>
        <div className="dg-feature__text reveal">
          <p className="eyebrow">{feature.eyebrow}</p>
          <h2>{feature.title}</h2>
          <p className="lead">{feature.text}</p>
        </div>
      </section>

      <section className="section dg-philosophy">
        <div className="container">
          <div className="dg-philosophy__top">
            <h2 className="reveal">{philosophy.title}</h2>
            <p className="lead reveal">{philosophy.text}</p>
          </div>
          <div className="dg-philosophy__img reveal">
            <Image src={philosophy.image} alt={philosophy.alt} fill sizes="(min-width: 1200px) 1136px, 100vw" />
          </div>
        </div>
      </section>

      <section className="dg-quickwrap">
        <div className="container">
          <QuickAccess groups={quick} />
        </div>
      </section>

      <section className="section cta-band ab-cta">
        <Rings className="ab-rings ab-rings--cta" />
        <div className="container">
          <h2>{cta.title}</h2>
          <p className="lead">{cta.text}</p>
          <div className="btn-row">
            <Link href={bookHref} className="btn btn--primary">Contact Us</Link>
            <Link href="/treatments" className="btn btn--outline">Explore Treatments</Link>
          </div>
        </div>
      </section>
    </>
  );
}
