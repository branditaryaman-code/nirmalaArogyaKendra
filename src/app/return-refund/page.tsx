import type { Metadata } from "next";
import { LegalContentLive } from "@/components/legal-content-live";

export const metadata: Metadata = { title: "Return & Refund Policy" };

export default function ReturnRefund() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "70ch" }}>
        <h1>Return &amp; Refund Policy</h1>
        <LegalContentLive
          id="refund"
          fallback={
            <>
              <p className="note">Placeholder content. Replace with the clinic&apos;s actual policy.</p>
              <p>
                Consultation, therapy and diagnostic bookings may be rescheduled or cancelled by contacting the
                clinic directly. Please speak to our team about the applicable timelines and any charges.
              </p>
              <p>
                Refunds, where applicable, are processed at the clinic&apos;s discretion after review. Contact us
                for any concerns regarding a payment or booking.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
