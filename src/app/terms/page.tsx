import type { Metadata } from "next";
import { LegalContentLive } from "@/components/legal-content-live";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "70ch" }}>
        <h1>Terms &amp; Conditions</h1>
        <LegalContentLive
          id="terms"
          fallback={
            <>
              <p className="note">Placeholder content. Replace with the clinic&apos;s actual terms.</p>
              <p>
                By using this website, you agree to these terms. Nirmala Arogya Kendra provides information about
                its services for general reference only; it does not constitute medical advice. For diagnosis,
                treatment or medical guidance, please consult a doctor at the clinic.
              </p>
              <p>
                Content on this site may be updated from time to time without notice. We are not responsible for
                any loss or damage arising from the use of this website or reliance on its content.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
