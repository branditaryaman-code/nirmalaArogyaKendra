import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { contact } from "@/lib/content";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__id">
            <span className="footer__logo"><Image src="/logo.png" alt="" width={44} height={44} /></span>
            <p className="footer__brand">{site.name}</p>
          </div>
          <p className="footer__text">{site.footerText}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__list">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Legal</h2>
          <ul className="footer__list">
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/return-refund">Return &amp; Refund Policy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__list footer__contact">
            <li><Icon name="pin" size={16} />{contact.address}</li>
            <li><Icon name="phone" size={16} />{contact.phone}</li>
            <li><Icon name="mail" size={16} />{contact.email}</li>
            <li><Icon name="clock" size={16} />{contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__base">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
