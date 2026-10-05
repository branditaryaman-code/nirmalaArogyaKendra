"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icons";
import { bookHref, nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href="/" className="brand" onClick={close} aria-label={`${site.name} – home`}>
          <Image src="/logo.png" alt="" width={52} height={52} className="brand__logo" priority />
          <span className="brand__name">{site.name}</span>
        </Link>

        <nav id="main-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
          <ul className="nav__list">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="nav__link"
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={bookHref} onClick={close} className="btn btn--accent nav__cta">
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
