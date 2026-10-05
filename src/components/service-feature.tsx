import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";

export type ServiceItem = { name: string; text: string; image: string; alt: string; href: string };

export function ServiceFeature({ items }: { items: ServiceItem[] }) {
  const [main, ...rest] = items;
  return (
    <div className="svc reveal">
      <Link href={main.href} className="svc-main">
        <div className="svc-main__img">
          <Image src={main.image} alt={main.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
        </div>
        <div className="svc-main__body">
          <h3>{main.name}</h3>
          <p className="muted">{main.text}</p>
          <span className="link-arrow">Learn More <Icon name="arrow" size={16} /></span>
        </div>
      </Link>
      <ul className="svc-list">
        {rest.map(({ name, text, image, alt, href }) => (
          <li key={name}>
            <Link href={href} className="svc-item">
              <div className="svc-item__img">
                <Image src={image} alt={alt} fill sizes="112px" />
              </div>
              <div className="svc-item__text">
                <h3>{name}</h3>
                <p className="muted">{text}</p>
              </div>
              <Icon name="arrow" size={18} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
