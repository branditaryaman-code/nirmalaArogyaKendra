import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBannerLive } from "@/components/page-banner-live";
import { GlanceBandLive } from "@/components/glance-band-live";
import { Rings } from "@/components/rings";
import { TreatmentExplorerLive } from "@/components/treatment-explorer-live";
import { treatmentsPage } from "@/lib/content";
import { bookHref } from "@/lib/site";

export const metadata: Metadata = { title: "Treatments & Therapies", description: treatmentsPage.hero.text };

export default function Treatments() {
  const { hero, collage, why, cta, disclaimer } = treatmentsPage;

  return (
    <>
      <PageBannerLive page="Treatments" image={hero.image} position="50% 58%" crumb="Treatments" label={hero.label} title={hero.title} text={hero.text} />

      <section className="section">
        <div className="container">
          <TreatmentExplorerLive />
          <p className="note tx-note">{disclaimer}</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <p className="eyebrow reveal">At a Glance</p>
          <GlanceBandLive />
        </div>
      </section>

      <section className="tx-collage reveal" aria-label="Our services in pictures">
        <div className="tx-collage__a"><Image src="/physiotheraphy.jpg" alt="Physiotherapist examining a patient's leg" fill sizes="(min-width: 700px) 34vw, 100vw" /></div>
        <div className="tx-collage__b"><Image src="/ayurveda.jpg" alt="Herbs and spices being ground in a stone mortar" fill sizes="(min-width: 700px) 25vw, 50vw" /></div>
        <div className="tx-collage__c"><Image src="/yoga.jpg" alt="Person seated in a meditation pose on a yoga mat" fill sizes="(min-width: 700px) 41vw, 50vw" /></div>
        <div className="tx-collage__d"><Image src="/accupuncture.jpg" alt="Practitioner applying a traditional therapy tool to a foot" fill sizes="(min-width: 700px) 17vw, 100vw" /></div>
        <div className="tx-collage__s">
          <p>
            {collage.title.map((l) => <span key={l}>{l}</span>)}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container tx-why">
          <h2 className="reveal">{why.title}</h2>
          <div className="tx-why__side reveal">
            <p className="lead">{why.text}</p>
            <ol className="tx-points">
              {why.points.map((p, i) => (
                <li key={p}><span>{String(i + 1).padStart(2, "0")}</span>{p}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section cta-band ab-cta">
        <Rings className="ab-rings ab-rings--cta" />
        <div className="container">
          <h2>{cta.title}</h2>
          <p className="lead">{cta.text}</p>
          <div className="btn-row">
            <Link href={bookHref} className="btn btn--primary">Contact Us</Link>
            <Link href="/centres" className="btn btn--outline">Explore Our Centre</Link>
          </div>
        </div>
      </section>
    </>
  );
}
