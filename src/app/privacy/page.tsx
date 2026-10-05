import type { Metadata } from "next";
import { LegalContentLive } from "@/components/legal-content-live";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "70ch" }}>
        <h1>Privacy Policy</h1>
        <LegalContentLive
          id="privacy"
          fallback={
            <>
              <p className="note">Placeholder content. Replace with the clinic&apos;s actual privacy policy.</p>
              <p>
                We collect only the information you choose to share with us, such as through the contact or
                appointment request form, in order to respond to your enquiry.
              </p>
              <p>
                Your information is not sold or shared with third parties except as required to provide the
                service you requested or as required by law. Contact us if you have questions about your data.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
