import Image from "next/image";
import Link from "next/link";

export function PageBanner({
  image,
  position = "50% 40%",
  crumb,
  label,
  title,
  text,
  children,
}: {
  image: string;
  position?: string;
  crumb: string;
  label: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero hero--page">
      <Image src={image} alt="" fill priority sizes="100vw" className="hero__bg" style={{ objectPosition: position }} />
      <div className="hero__overlay" />
      <div className="container">
        <div className="hero__content rise">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">{crumb}</li>
            </ol>
          </nav>
          <p className="hero__label">{label}</p>
          <h1>{title}</h1>
          {text && <p className="hero__lead">{text}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
