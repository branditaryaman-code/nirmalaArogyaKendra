import type { Metadata } from "next";
import { ContactInfoLive } from "@/components/contact-info-live";
import { Faq } from "@/components/faq";
import { PageBannerLive } from "@/components/page-banner-live";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request an appointment or get in touch with Nirmala Arogya Kendra.",
};

export default function Contact() {
  return (
    <>
      <PageBannerLive
        page="Contact"
        image="/contact.png"
        position="70% 40%"
        crumb="Contact Us"
        label="Contact Us"
        title="We Are Here to Help"
        text="Send an appointment request or contact the clinic directly."
      />

      <section className="section">
        <div className="container ct-contact">
          <div className="ct-contact__info reveal">
            <p className="eyebrow">Get in Touch</p>
            <h2>Contact details</h2>
            <ContactInfoLive />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-wrap">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Before you visit</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
