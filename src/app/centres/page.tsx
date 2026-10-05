import type { Metadata } from "next";
import { CentresListLive } from "@/components/centres-list-live";
import { CtaBand } from "@/components/cta-band";
import { PageBannerLive } from "@/components/page-banner-live";

export const metadata: Metadata = {
  title: "Our Centres",
  description: "Find a Nirmala Arogya Kendra centre near you.",
};

export default function Centres() {
  return (
    <>
      <PageBannerLive
        page="Centres"
        image="/store.png"
        position="50% 24%"
        crumb="Our Centres"
        label="Our Centres"
        title="Find Us"
        text="Visit a centre for consultation, therapy and diagnostics."
      />

      <section className="section">
        <div className="container">
          <CentresListLive />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
