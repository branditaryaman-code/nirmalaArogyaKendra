import Image from "next/image";
import { Icon } from "./icons";

type SpecialistCard = { name: string; role: string; bio: string; days: string; image?: string };

export function SpecialistList({ items, detailed = false }: { items: SpecialistCard[]; detailed?: boolean }) {
  return (
    <ul className="team">
      {items.map(({ name, role, bio, days, image }) => (
        <li key={name} className="team__row">
          <span className="team__avatar">
            {image ? <Image src={image} alt={`${name}`} fill sizes="72px" /> : <Icon name="user" size={28} />}
          </span>
          <div className="team__who">
            <h3 className="team__name">{name}</h3>
            <p className="team__role">{role}</p>
          </div>
          {detailed && (
            <div className="team__more">
              <p className="muted">{bio}</p>
              <p className="card__meta"><Icon name="clock" size={16} />{days}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
