import Link from "next/link";
import { bookHref } from "@/lib/site";

export function CtaBand({
  title = "Your Health, Our Priority",
  text = "Get in touch with our team.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <div className="btn-row">
          <Link href={bookHref} className="btn btn--primary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
