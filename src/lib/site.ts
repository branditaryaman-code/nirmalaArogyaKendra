export const site = {
  name: "Nirmala Arogya Kendra",
  positioning:
    "State of the Art Modern Clinic for Physiotherapy, Acupuncture, Yoga Therapy, Ayurveda, Orthopaedics with all diagnostic facilities under one roof.",
  tagline: "A complete health care unit under one roof...",
  footerText:
    "A complete healthcare unit under one roof, where modern healthcare, therapeutic practices and holistic wellness come together to provide comprehensive care for your health, comfort and well-being.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/diagnostics", label: "Diagnostics" },
  { href: "/yoga-therapy", label: "Yoga & Wellness" },
  { href: "/specialists", label: "Specialists" },
  { href: "/centres", label: "Centres" },
];

export const bookHref = "/contact";

export type Tone = "blue" | "gold";

export const services: { name: string; tone: Tone; href: string }[] = [
  { name: "Physiotherapy", tone: "blue", href: "/treatments#physiotherapy" },
  { name: "Acupuncture", tone: "gold", href: "/treatments#acupuncture" },
  { name: "Yoga Therapy", tone: "gold", href: "/yoga-therapy" },
  { name: "Ayurveda", tone: "gold", href: "/treatments#ayurveda" },
  { name: "Orthopaedics", tone: "blue", href: "/treatments#orthopaedics" },
  { name: "ECG", tone: "blue", href: "/diagnostics" },
  { name: "Blood Tests", tone: "blue", href: "/diagnostics" },
  { name: "Diet & Nutrition", tone: "gold", href: "/diagnostics" },
  { name: "Gym / Yoga", tone: "gold", href: "/yoga-therapy" },
  { name: "Doctor's Chamber", tone: "blue", href: "/treatments#doctors-chamber" },
];
