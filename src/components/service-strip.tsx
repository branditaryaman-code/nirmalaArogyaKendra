import { Apple, Bone, Dumbbell, Flower2, HeartPulse, Leaf, PersonStanding, Stethoscope, Droplet } from "lucide-react";
import Link from "next/link";
import { Icon } from "./icons";
import { services } from "@/lib/site";

const size = 24;
const stroke = 1.8;
const icons: Record<string, React.ReactNode> = {
  Physiotherapy: <PersonStanding size={size} strokeWidth={stroke} />,
  Acupuncture: <Icon name="needle" size={size} />,
  "Yoga Therapy": <Flower2 size={size} strokeWidth={stroke} />,
  Ayurveda: <Leaf size={size} strokeWidth={stroke} />,
  Orthopaedics: <Bone size={size} strokeWidth={stroke} />,
  ECG: <HeartPulse size={size} strokeWidth={stroke} />,
  "Blood Tests": <Droplet size={size} strokeWidth={stroke} />,
  "Diet & Nutrition": <Apple size={size} strokeWidth={stroke} />,
  "Gym / Yoga": <Dumbbell size={size} strokeWidth={stroke} />,
  "Doctor's Chamber": <Stethoscope size={size} strokeWidth={stroke} />,
};

export function ServiceStrip() {
  return (
    <nav className="strip" aria-label="Quick services">
      <div className="container">
        <ul className="strip__bar">
          {services.map(({ name, href }) => (
            <li key={name} className="strip__cell">
              <Link href={href} className="strip__item">
                {icons[name]}
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
