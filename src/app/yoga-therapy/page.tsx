import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageBannerLive } from "@/components/page-banner-live";
import { Rings } from "@/components/rings";
import { YogaBatchesLive, YogaWhatLive } from "@/components/yoga-sections-live";
import { yoga } from "@/lib/content";
import { bookHref } from "@/lib/site";

export const metadata: Metadata = { title: "Yoga Therapy & Wellness", description: yoga.lead };

export default function YogaTherapy() {
  const { hero, what, practice, sessions, connect, statement, cta } = yoga;

  return (
    <>
      <PageBannerLive page="Yoga & Wellness" image={hero.image} position="50% 58%" crumb="Yoga Therapy & Wellness" label={hero.label} title={hero.title} text={yoga.lead} />

      <section className="section">
        <div className="container yg-what">
          <YogaWhatLive eyebrow={what.eyebrow} note={yoga.disclaimer} />
        </div>
      </section>

      <section className="section section--white">
        <div className="container yg-practice">
          <h2 className="reveal">{practice.title}</h2>
          <ol className="yg-points reveal">
            {practice.points.map(({ name, text }, i) => (
              <li key={name} className="yg-point">
                <span className="yg-point__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p className="muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="yg-sessions">
        <div className="yg-sessions__text reveal">
          <p className="eyebrow">{sessions.eyebrow}</p>
          <h2>{sessions.title}</h2>
          <ul className="yg-formats">
            {yoga.formats.map(({ title, text }) => (
              <li key={title}><strong>{title}</strong><span>{text}</span></li>
            ))}
          </ul>
          <div className="yg-batches">
            <p className="yg-batches__label">Weekly batches</p>
            <ul>
              <YogaBatchesLive />
            </ul>
          </div>
        </div>
        <div className="yg-sessions__img">
          <Image src={sessions.image} alt={sessions.alt} fill sizes="(min-width: 900px) 62vw, 100vw" />
        </div>
      </section>

      <section className="section section--white">
        <div className="container yg-connect">
          <div className="yg-connect__intro reveal">
            <p className="eyebrow">Together</p>
            <h2>{connect.title}</h2>
            <p className="lead">{connect.text}</p>
          </div>
          <ol className="yg-links reveal">
            {connect.items.map(({ name, text, href }, i) => (
              <li key={name}>
                <Link href={href} className="yg-links__row">
                  <span className="yg-links__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="yg-links__body">
                    <span className="yg-links__name">{name}</span>
                    <span className="yg-links__text">{text}</span>
                  </span>
                  <Icon name="arrow" size={18} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section yg-statement">
        <Rings className="ab-rings" />
        <div className="container yg-statement__grid">
          <h2 className="reveal">{statement.title}</h2>
          <p className="lead reveal">{statement.text}</p>
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
