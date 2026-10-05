import Image from "next/image";
import Link from "next/link";
import { OurApproachLive } from "@/components/approach-steps";
import { CtaBand } from "@/components/cta-band";
import { DiagnosticsShowcaseLive } from "@/components/diagnostics-showcase-live";
import { Faq } from "@/components/faq";
import { Icon } from "@/components/icons";
import { ServiceFeatureLive } from "@/components/service-feature-live";
import { ServiceStrip } from "@/components/service-strip";
import { HeroBannerLive } from "@/components/hero-banner-live";
import { SpecialistList } from "@/components/specialist-list";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { WhySection } from "@/components/why-section";
import { home, specialists } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroBannerLive />

      <ServiceStrip />

      <section className="section">
        <div className="container centre">
          <figure className="centre__img reveal">
            <Image
              src="/store.png"
              alt="Nirmala Arogya Kendra clinic entrance"
              width={1448}
              height={1086}
              sizes="(min-width: 900px) 56vw, 100vw"
              className="media"
            />
            <figcaption className="caption">Nirmala Arogya Kendra · clinic entrance</figcaption>
          </figure>
          <div className="centre__text reveal">
            <p className="eyebrow">{home.centre.eyebrow}</p>
            <h2>{home.centre.title}</h2>
            <p className="lead">{home.centre.text}</p>
            <ul className="dotlist">
              {home.centre.disciplines.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <ul className="marks">
              {home.centre.features.map(({ icon, label }) => (
                <li key={label}><Icon name={icon} size={16} />{label}</li>
              ))}
            </ul>
            <Link href="/centres" className="btn btn--primary">{home.centre.cta}</Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="svc-head reveal">
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2>{home.services.title}</h2>
              <p className="lead">{home.services.text}</p>
            </div>
            <Link href="/treatments" className="link-arrow">View All Services <Icon name="arrow" size={16} /></Link>
          </div>
          <ServiceFeatureLive />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <OurApproachLive />
        </div>
      </section>

      <section className="section section--dx">
        <div className="container">
          <DiagnosticsShowcaseLive
            head={
              <div className="section-head">
                <p className="eyebrow">Diagnostics</p>
                <h2>{home.diagnostics.title}</h2>
                <p className="lead">{home.diagnostics.text}</p>
                <Link href="/diagnostics" className="link-arrow">View All <Icon name="arrow" size={16} /></Link>
              </div>
            }
          />
        </div>
      </section>

      <WhySection />

      <section className="section section--white">
        <div className="container team-wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Our Specialists</p>
            <h2>Meet the team</h2>
            <Link href="/specialists" className="link-arrow">All Specialists <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="reveal">
            <SpecialistList items={specialists.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="section section--wellness">
        <div className="container wellness">
          <div className="wellness__copy reveal">
            <p className="eyebrow">Yoga Therapy &amp; Wellness</p>
            <h2>Movement, breath and balance</h2>
            <p className="lead">Guided yoga sessions and wellness facilities to support a healthy lifestyle.</p>
            <ul className="rules">
              <li>Yoga therapy</li>
              <li>Gym / Yoga facility</li>
              <li>Diet &amp; nutrition</li>
            </ul>
            <Link href="/yoga-therapy" className="btn btn--primary">Explore Yoga Therapy</Link>
          </div>
          <div className="arch reveal">
            <Image src="/gymyoga.png" alt="People practising yoga in a bright studio" fill sizes="(min-width: 900px) 34vw, 80vw" />
          </div>
        </div>
      </section>

      <section className="section section--testimonials">
        <div className="container">
          <TestimonialCarousel
            head={
              <div className="section-head">
                <p className="eyebrow">Patient Testimonials</p>
                <h2>What patients say</h2>
              </div>
            }
          />
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <div className="section-head reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
            <p className="lead">General information only. For medical advice, please consult a doctor.</p>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
