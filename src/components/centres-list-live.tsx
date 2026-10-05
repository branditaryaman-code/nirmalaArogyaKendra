"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./icons";
import { Placeholder } from "./placeholder";
import { fetchActiveCentres, type LiveCentre } from "@/lib/centres-live";

export function CentresListLive() {
  const [centres, setCentres] = useState<LiveCentre[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchActiveCentres().then(setCentres).catch(() => setError(true));
  }, []);

  if (error) return <p className="note">Centres could not be loaded. Please try again shortly.</p>;
  if (centres === null) return <p className="note">Loading…</p>;
  if (centres.length === 0) return <p className="note">No centres are available right now.</p>;

  return (
    <ol className="ct-list">
      {centres.map(({ name, address, phone, hours, services, image }, i) => (
        <li key={name + i} className="ct-row reveal">
          <div className={`ct-row__img${image ? " ct-row__img--photo" : ""}`}>
            {image ? (
              <Image src={image} alt={`${name} entrance`} fill sizes="(min-width: 900px) 56vw, 100vw" />
            ) : (
              <Placeholder label={`${name} photo`} ratio="16 / 10" />
            )}
          </div>
          <div className="ct-row__body">
            <span className="ct-row__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h2>{name}</h2>
            <ul className="ct-info">
              <li><Icon name="pin" size={18} />{address}</li>
              <li><Icon name="phone" size={18} />{phone}</li>
              <li><Icon name="clock" size={18} />{hours}</li>
            </ul>
            <ul className="dotlist">
              {services.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
