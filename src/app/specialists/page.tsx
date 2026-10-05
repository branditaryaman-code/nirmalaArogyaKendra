import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageBannerLive } from "@/components/page-banner-live";
import { SpecialistListLive } from "@/components/specialist-list-live";

export const metadata: Metadata = {
  title: "Our Specialists",
  description: "Meet the doctors and therapists at Nirmala Arogya Kendra.",
};

export default function Specialists() {
  return (
    <>
      <PageBannerLive
        page="Specialists"
        image="/orthopaedics.jpg"
        position="50% 35%"
        crumb="Our Specialists"
        label="Our Specialists"
        title="The Team Behind Your Care"
        text="Doctors and therapists across medical and traditional disciplines."
      />

      <section className="section">
        <div className="container">
          <SpecialistListLive detailed />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
