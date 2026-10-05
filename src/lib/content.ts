/**
 * DEMO CONTENT
 * Everything below except `site.ts` (verified brand info, nav, service names) is demo data
 * for the development version. Replace values in place; the UI reads only from this file.
 * Items with `demo: true` are demo entries that are not shown in the UI.
 */
import type { IconName } from "@/components/icons";
import type { Tone } from "./site";

/* ---------- Contact & centres ---------- */
export const contact = {
  phone: "+91 00000 00000",
  email: "hello@example.com",
  address: "12 Example Road, Kolkata 700000",
  hours: "Mon–Sat, 9:00 AM – 7:00 PM",
};

/** WhatsApp chat used by the floating button. Digits only, with country code (demo value: replace). */
export const whatsapp = {
  number: "910000000000",
  message: "Hello Nirmala Arogya Kendra, I would like to know more about your services.",
};

export type Centre = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  image?: string;
  demo?: boolean;
};

export const centres: Centre[] = [
  {
    name: "Main Centre",
    address: contact.address,
    phone: contact.phone,
    hours: contact.hours,
    services: ["Doctor's Chamber", "Physiotherapy", "Acupuncture", "Yoga Therapy", "Ayurveda", "Orthopaedics", "ECG", "Blood Tests"],
    image: "/store.png",
  },
  {
    name: "Second Centre",
    address: "34 Sample Lane, Kolkata 700001",
    phone: "+91 00000 11111",
    hours: "Mon–Sat, 10:00 AM – 6:00 PM",
    services: ["Physiotherapy", "Yoga Therapy", "Diet & Nutrition"],
    image: "/store.png", // demo: reuses the main centre photo until this centre has its own
    demo: true,
  },
];

/* ---------- Home ---------- */
export const home = {
  diagnostics: {
    title: "Diagnostics & Wellness",
    text: "Essential diagnostic and wellness facilities for better health.",
    items: [
      { name: "ECG", text: "Heart health assessment.", image: "/ecg.jpg", alt: "ECG machine with electrodes attached to a patient", href: "/diagnostics#ecg" },
      { name: "Blood Tests", text: "Accurate diagnostic testing.", image: "/bloodTest.jpg", alt: "Gloved hand holding a blood sample tube", href: "/diagnostics#blood-tests" },
      { name: "Diet & Nutrition", text: "Personalised diet guidance.", image: "/diet.jpg", alt: "Nutrition specialist with fresh fruit and a notepad", href: "/diagnostics#diet-nutrition" },
      { name: "Gym / Yoga", text: "Fitness and wellness support.", image: "/gymyoga.png", alt: "People practising yoga in a bright studio with gym equipment", href: "/diagnostics#gym-yoga" },
    ],
  },
  services: {
    title: "Our Healthcare Services",
    text: "A combination of modern medical care and holistic therapies for overall well-being.",
    items: [
      { name: "Physiotherapy", text: "Pain relief and improved mobility.", image: "/physiotheraphy.jpg", alt: "Physiotherapist examining a patient's leg", href: "/treatments#physiotherapy" },
      { name: "Acupuncture", text: "Traditional therapy for pain management.", image: "/accupuncture.jpg", alt: "Practitioner applying a traditional therapy tool to a foot", href: "/treatments#acupuncture" },
      { name: "Yoga Therapy", text: "Therapeutic yoga for better health.", image: "/yoga.jpg", alt: "Person seated in a meditation pose on a yoga mat", href: "/yoga-therapy" },
      { name: "Ayurveda", text: "Natural healing approaches.", image: "/ayurveda.jpg", alt: "Herbs and spices being ground in a stone mortar", href: "/treatments#ayurveda" },
      { name: "Orthopaedics", text: "Bone, joint and musculoskeletal care.", image: "/orthopaedics.jpg", alt: "Doctor examining a patient's knee", href: "/treatments#orthopaedics" },
    ],
  },
  centre: {
    eyebrow: "Our Centre",
    title: "Comprehensive Care, Under One Roof",
    text: "Nirmala Arogya Kendra is a modern healthcare centre bringing multiple therapeutic and healthcare services together under one roof.",
    disciplines: ["Physiotherapy", "Acupuncture", "Yoga Therapy", "Ayurveda", "Orthopaedics", "Diagnostic & wellness facilities"],
    features: [
      { icon: "building", label: "Modern Facilities" },
      { icon: "layers", label: "Multiple Therapies" },
      { icon: "heart", label: "Patient-Centred Care" },
    ] as { icon: IconName; label: string }[],
    cta: "Explore Our Centre",
  },
  hero: {
    image: "/banner.png",
    label: "A complete health care unit under one roof",
    title: "Comprehensive Care for a Healthier You",
    text: "State of the Art Modern Clinic for Physiotherapy, Acupuncture, Yoga Therapy, Ayurveda, Orthopaedics and diagnostic facilities under one roof.",
  },
  steps: [
    { title: "Consultation", text: "Meet the clinic team and share your concerns." },
    { title: "Assessment", text: "Your needs are reviewed, with diagnostics where required." },
    { title: "Personalised Care", text: "Services are chosen around you." },
    { title: "Follow-up", text: "Progress is reviewed as you continue." },
  ],
  why: {
    eyebrow: "Why Nirmala Arogya Kendra",
    title: "Care That Brings Different Approaches Together",
    text: "Our integrated approach brings medical care and holistic therapies together to support health and well-being.",
    items: [
      { lines: ["Multi-disciplinary", "Care"] },
      { lines: ["Holistic", "Approach"] },
      { lines: ["Modern", "Facilities"] },
      { lines: ["Experienced", "Team"] },
      { lines: ["Personalised", "Care Plans"] },
    ],
  },
};

/* ---------- About ---------- */
export const about = {
  hero: {
    label: "About Nirmala Arogya Kendra",
    title: "People. Therapies. A Healthier Tomorrow.",
    text: "Nirmala Arogya Kendra brings together modern healthcare, therapeutic services and holistic wellness under one roof.",
  },
  story: {
    eyebrow: "Our Story",
    title: "A Centre Built on a Simple Vision",
    paragraphs: [
      "Nirmala Arogya Kendra was created around a simple idea: different healthcare approaches work best when they sit together.",
      "Under one roof, patients can consult a doctor, begin a therapy such as physiotherapy, acupuncture, yoga therapy or Ayurveda, and have diagnostic tests done, without moving between providers.",
    ],
    panel: { label: "Under one roof", text: "Doctors, therapies and diagnostics, together." },
  },
  approach: {
    lines: ["Modern Medicine.", "Holistic Therapies.", "Personalised Care."],
    items: [
      { title: "Modern Facilities", text: "Essential healthcare and diagnostic facilities under one roof." },
      { title: "Multiple Therapies", text: "A combination of modern medical care and therapeutic approaches." },
      { title: "Patient-Centred Care", text: "Care that considers individual needs and well-being." },
    ],
  },
  quote: "Healthcare is a partnership, not just a treatment.",
  index: {
    title: "An Integrated Approach to Well-Being",
    text: "Conventional and traditional disciplines work alongside each other, so care can be planned around the individual rather than the department.",
    items: [
      { name: "Physiotherapy", href: "/treatments#physiotherapy" },
      { name: "Acupuncture", href: "/treatments#acupuncture" },
      { name: "Yoga Therapy", href: "/yoga-therapy" },
      { name: "Ayurveda", href: "/treatments#ayurveda" },
      { name: "Orthopaedics", href: "/treatments#orthopaedics" },
      { name: "Diagnostics & Wellness", href: "/diagnostics" },
    ],
  },
  centre: {
    eyebrow: "Our Centre",
    title: "Where Care Comes Together",
    text: "A modern healthcare centre where consultation, therapies and diagnostic facilities are available under one roof.",
  },
  people: {
    title: "Care for Every Stage of Life",
    text: "From a first consultation to ongoing therapy and wellness, the centre brings healthcare professionals and supportive services together for patients and families.",
  },
  cta: {
    title: "Begin Your Journey Towards Better Well-Being",
    text: "Explore our healthcare services or get in touch with Nirmala Arogya Kendra.",
  },
};

/* ---------- Treatments ---------- */
export type Treatment = {
  slug: string;
  name: string;
  icon: IconName;
  tone: Tone;
  summary: string;
  details: string;
  expect: string[];
  href: string;
};

export const treatments: Treatment[] = [
  {
    slug: "doctors-chamber",
    name: "Doctor's Chamber",
    icon: "user",
    tone: "blue",
    summary: "Consult a doctor at the clinic.",
    details: "Meet a doctor to discuss your health concerns and decide the right next step, including tests or therapies available at the clinic.",
    expect: ["A discussion of your concerns and history", "Advice on tests or therapies where relevant", "Guidance on follow-up"],
    href: "/specialists",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    icon: "activity",
    tone: "blue",
    summary: "Physical therapy for movement and mobility.",
    details: "Therapy sessions focused on movement, strength and everyday function, planned by the treating physiotherapist.",
    expect: ["An initial assessment", "A session plan set by the therapist", "Exercise guidance to continue at home"],
    href: "/treatments#physiotherapy",
  },
  {
    slug: "acupuncture",
    name: "Acupuncture",
    icon: "check",
    tone: "gold",
    summary: "A traditional needle-based therapy.",
    details: "A traditional therapy delivered by a trained practitioner. Suitability is discussed during consultation.",
    expect: ["A consultation before treatment", "Sessions explained step by step", "Review of how you are feeling between visits"],
    href: "/treatments#acupuncture",
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "shield",
    tone: "blue",
    summary: "Care for bones, joints and muscles.",
    details: "Consultation for bone, joint and muscle concerns, with referral for tests or therapy where needed.",
    expect: ["Examination and discussion", "Recommendation of tests or therapy", "A follow-up plan"],
    href: "/treatments#orthopaedics",
  },
  {
    slug: "ayurveda",
    name: "Ayurveda",
    icon: "book",
    tone: "gold",
    summary: "A traditional Indian system of medicine.",
    details: "Consultation based on the Ayurvedic system, with lifestyle and dietary guidance offered alongside any treatment.",
    expect: ["A detailed consultation", "Lifestyle and diet guidance", "A plan reviewed at follow-up visits"],
    href: "/treatments#ayurveda",
  },
  {
    slug: "yoga-therapy",
    name: "Yoga Therapy",
    icon: "sun",
    tone: "gold",
    summary: "Guided yoga practice for wellbeing.",
    details: "Guided sessions combining posture, breathing and relaxation, adapted to the individual.",
    expect: ["A short introduction to your needs", "Guided practice in small sessions", "A routine you can follow at home"],
    href: "/yoga-therapy",
  },
];

export const treatmentsPage = {
  lead: "A range of medical and traditional therapies, available together at the clinic.",
  disclaimer: "Descriptions are general. The right treatment is decided by the practitioner after consultation.",
  hero: {
    label: "Our Treatments & Therapies",
    title: "Care That Brings Different Approaches Together",
    text: "Explore therapeutic, medical and wellness services available at Nirmala Arogya Kendra.",
    image: "/doctorChamber.png",
  },
  explorer: [
    { id: "physiotherapy", slug: "physiotherapy", category: "Therapy", name: "Physiotherapy", text: "Pain relief and improved mobility.", image: "/physiotheraphy.jpg", alt: "Physiotherapist examining a patient's leg", href: "/treatments#physiotherapy" },
    { id: "acupuncture", slug: "acupuncture", category: "Therapy", name: "Acupuncture", text: "Traditional therapy for pain management.", image: "/accupuncture.jpg", alt: "Practitioner applying a traditional therapy tool to a foot", href: "/treatments#acupuncture" },
    { id: "yoga-therapy", slug: "yoga-therapy", category: "Therapy & Wellness", name: "Yoga Therapy", text: "Therapeutic yoga for better health.", image: "/yoga.jpg", alt: "Person seated in a meditation pose on a yoga mat", href: "/yoga-therapy" },
    { id: "ayurveda", slug: "ayurveda", category: "Holistic Wellness", name: "Ayurveda", text: "Natural healing approaches.", image: "/ayurveda.jpg", alt: "Herbs and spices being ground in a stone mortar", href: "/treatments#ayurveda" },
    { id: "orthopaedics", slug: "orthopaedics", category: "Medical Care", name: "Orthopaedics", text: "Bone, joint and musculoskeletal care.", image: "/orthopaedics.jpg", alt: "Doctor examining a patient's knee", href: "/treatments#orthopaedics" },
    { id: "diagnostics", slug: "", category: "Diagnostics", name: "Diagnostics & Wellness", text: "Essential diagnostic and wellness facilities.", image: "/bloodTest.jpg", alt: "Gloved hand holding a blood sample tube", href: "/diagnostics" },
  ],
  categories: [
    { label: "Therapies", image: "/physiotheraphy.jpg", cta: { label: "Explore therapies", href: "#physiotherapy" }, items: [{ name: "Physiotherapy", href: "#physiotherapy" }, { name: "Acupuncture", href: "#acupuncture" }, { name: "Yoga Therapy", href: "#yoga-therapy" }] },
    { label: "Holistic Wellness", image: "/ayurveda.jpg", cta: { label: "Explore Ayurveda", href: "#ayurveda" }, items: [{ name: "Ayurveda", href: "#ayurveda" }, { name: "Yoga & Wellness", href: "/yoga-therapy" }] },
    { label: "Medical Care", image: "/orthopaedics.jpg", cta: { label: "Explore Orthopaedics", href: "#orthopaedics" }, items: [{ name: "Orthopaedics", href: "#orthopaedics" }, { name: "Doctor's Chamber", href: "/specialists", id: "doctors-chamber" }] },
    { label: "Diagnostics", image: "/ecg.jpg", cta: { label: "View diagnostics", href: "/diagnostics" }, items: [{ name: "ECG", href: "/diagnostics#ecg" }, { name: "Blood Tests", href: "/diagnostics#blood-tests" }, { name: "Diet & Nutrition", href: "/diagnostics#diet-nutrition" }] },
  ] as { label: string; image: string; cta: { label: string; href: string }; items: { name: string; href: string; id?: string }[] }[],
  collage: { title: ["Different Approaches.", "One Place for Care."] },
  why: {
    title: "One Centre. Multiple Paths to Better Well-Being.",
    text: "Nirmala Arogya Kendra brings medical care, therapies and diagnostics together, so treatment can be planned around each person.",
    points: ["Modern Facilities", "Multiple Therapies", "Patient-Centred Care"],
  },
  cta: {
    title: "Not Sure Where to Begin?",
    text: "Explore our services or get in touch with Nirmala Arogya Kendra.",
  },
};

/* ---------- Diagnostics & wellness ---------- */
export const facilities: { icon: IconName; name: string; text: string; detail: string; demo?: boolean }[] = [
  { icon: "activity", name: "ECG", text: "Electrocardiogram testing at the clinic.", detail: "7:00 AM – 9:00 PM" },
  { icon: "droplet", name: "Blood Tests", text: "Pathology sample collection with reports shared by the clinic.", detail: "Collection centre" },
  { icon: "book", name: "Diet & Nutrition", text: "Dietary guidance to support your care and lifestyle.", detail: "By appointment" },
  { icon: "sun", name: "Gym / Yoga", text: "Space for supervised exercise and yoga.", detail: "Slots by booking" },
  { icon: "layers", name: "Health Check Packages", text: "Grouped tests for routine check-ups.", detail: "Packages to be announced", demo: true },
];

export const diagnosticsPage = {
  hero: {
    label: "Diagnostics & Wellness",
    title: "Understanding Your Health, Beyond the Surface",
    text: "Diagnostic and wellness facilities supporting informed healthcare and everyday well-being.",
    image: "/bloodTest.jpg",
  },
  intro: {
    title: "Care Begins With Understanding",
    text: "From essential diagnostic testing to nutrition and wellness support, our facilities are designed to complement the healthcare services available at Nirmala Arogya Kendra.",
  },
  diagnostics: [
    { id: "ecg", name: "ECG", text: "Heart health assessment.", image: "/ecg.jpg", alt: "ECG machine with electrodes attached to a patient", pos: "50% 45%" },
    { id: "blood-tests", name: "Blood Tests", text: "Essential diagnostic testing.", image: "/bloodTest.jpg", alt: "Gloved hand holding a blood sample tube", pos: "62% 40%" },
  ],
  wellness: [
    { id: "diet-nutrition", name: "Diet & Nutrition", text: "Personalised diet guidance.", image: "/diet.jpg", alt: "Nutrition specialist with fresh fruit and a notepad", pos: "40% 50%" },
    { id: "gym-yoga", name: "Gym / Yoga", text: "Fitness and wellness support.", image: "/gymyoga.png", alt: "People practising yoga in a bright studio with gym equipment", pos: "60% 50%" },
  ],
  feature: {
    eyebrow: "Diagnostic Support",
    title: "Useful Information for Better Care",
    text: "Our team can explain which tests and facilities are available at the centre, and how they fit alongside consultation and therapy.",
    image: "/doctorChamber.png",
    alt: "Doctor's chamber with examination couch and anatomy charts",
  },
  philosophy: {
    title: "Wellness Is Part of Healthcare",
    text: "Alongside diagnostic support, wellness services can complement a broader approach to everyday health.",
    image: "/banner.png",
    alt: "People practising yoga in a sunlit studio",
  },
  quick: [
    { label: "Diagnostics", items: [{ name: "ECG", id: "ecg" }, { name: "Blood Tests", id: "blood-tests" }] },
    { label: "Wellness", items: [{ name: "Diet & Nutrition", id: "diet-nutrition" }, { name: "Gym / Yoga", id: "gym-yoga" }] },
  ],
  cta: {
    title: "Looking for Diagnostic or Wellness Support?",
    text: "Get in touch with Nirmala Arogya Kendra to learn more about the facilities available at our centre.",
  },
};

/* ---------- Yoga therapy & wellness ---------- */
export const yoga = {
  hero: {
    label: "Yoga Therapy & Wellness",
    title: "Movement With Purpose. Wellness With Care.",
    image: "/banner.png",
  },
  what: {
    eyebrow: "Yoga Therapy",
    title: "What Is Yoga Therapy?",
    paragraphs: [
      "Yoga therapy brings yoga practices such as posture, breathing and relaxation into a guided, individual session.",
      "At Nirmala Arogya Kendra it is offered alongside the centre's medical and therapeutic services, as one part of a broader approach to well-being.",
    ],
    image: "/yoga.jpg",
    alt: "Person seated in a meditation pose on a yoga mat",
  },
  practice: {
    title: "A Practice Built Around You",
    points: [
      { name: "Movement", text: "Gentle, guided posture practice adapted to the individual." },
      { name: "Breath", text: "Simple breathing techniques, introduced step by step." },
      { name: "Awareness", text: "Relaxation and mindful attention to close each session." },
    ],
  },
  sessions: {
    eyebrow: "At the Centre",
    title: "Sessions Shaped Around the Individual",
    image: "/gymyoga.png",
    alt: "People practising yoga in a bright studio with gym equipment",
  },
  connect: {
    title: "Yoga & Nirmala Arogya Kendra",
    text: "Yoga therapy sits alongside the centre's other services, so care can be planned across disciplines.",
    items: [
      { name: "Physiotherapy", text: "Movement-focused therapy that can complement guided yoga practice.", href: "/treatments#physiotherapy" },
      { name: "Acupuncture", text: "A traditional therapy, available at the same centre.", href: "/treatments#acupuncture" },
      { name: "Ayurveda", text: "Natural healing approaches from the Ayurvedic tradition.", href: "/treatments#ayurveda" },
      { name: "Wellness", text: "Diet & nutrition and gym / yoga facilities.", href: "/diagnostics#diet-nutrition" },
    ],
  },
  statement: {
    title: "Health Is More Than Treatment. It Is Movement, Rest and Attention.",
    text: "Yoga and wellness services at Nirmala Arogya Kendra are offered to complement, not replace, medical care.",
  },
  cta: {
    title: "Ready to Begin?",
    text: "Get in touch with Nirmala Arogya Kendra to learn more about yoga therapy and wellness sessions.",
  },
  lead: "Guided yoga and wellness facilities designed to support a healthy, balanced lifestyle alongside medical care.",
  includes: [
    { title: "Gentle movement", text: "Posture-based practice adapted to the individual." },
    { title: "Breathing practice", text: "Simple techniques introduced step by step." },
    { title: "Relaxation", text: "Guided rest to close each session." },
    { title: "Home routine", text: "A short routine you can continue on your own." },
  ],
  formats: [
    { title: "Individual sessions", text: "One-to-one guidance with a yoga therapist." },
    { title: "Small groups", text: "Guided group practice in a relaxed setting." },
  ],
  schedule: [
    { batch: "Morning", time: "7:00 – 8:00 AM", days: "Mon – Sat" },
    { batch: "Midday", time: "12:00 – 1:00 PM", days: "Mon, Wed, Fri" },
    { batch: "Evening", time: "5:30 – 6:30 PM", days: "Mon – Sat" },
  ],
  disclaimer: "Yoga therapy complements, and does not replace, medical care. Please consult your doctor before starting.",
};

/* ---------- Specialists ---------- */
/** `image`: optional photo path in /public. Until one is added, an icon is shown. */
export type Specialist = { name: string; role: string; bio: string; days: string; tone: Tone; image?: string };

export const specialistsDemo = true;
export const specialists: Specialist[] = [
  { name: "Dr. Arindam Chatterjee", role: "General Physician", bio: "Sees patients in the Doctor's Chamber and coordinates tests and referrals.", days: "Mon, Wed, Fri", tone: "blue" },
  { name: "Dr. Sohini Mukherjee", role: "Orthopaedics", bio: "Consults on bone, joint and muscle concerns.", days: "Tue, Thu, Sat", tone: "blue" },
  { name: "Rahul Dey", role: "Physiotherapist", bio: "Plans and leads physiotherapy sessions.", days: "Mon – Sat", tone: "blue" },
  { name: "Priya Sarkar", role: "Acupuncture Practitioner", bio: "Provides acupuncture consultations and sessions.", days: "Mon, Tue, Thu", tone: "gold" },
  { name: "Dr. Kaushik Banerjee", role: "Ayurveda Physician", bio: "Offers Ayurvedic consultation and lifestyle guidance.", days: "Wed, Sat", tone: "gold" },
  { name: "Meera Nandi", role: "Yoga Therapist", bio: "Leads individual and small-group yoga therapy.", days: "Mon – Sat", tone: "gold" },
];

/* ---------- Testimonials (DEMO: fictional names and quotes, not real patients. Replace with consented patient feedback.) ---------- */
export const testimonialsImage = { src: "/doctorChamber.png", alt: "Doctor chamber at the clinic" };
export const testimonials = [
  { quote: "The staff were welcoming and everything I needed was in one place.", name: "Ananya Sen" },
  { quote: "It was easy to book, and the team explained each step clearly.", name: "Arindam Mukherjee" },
  { quote: "A calm clinic where I could see a doctor and start therapy in the same visit.", name: "Priya Chatterjee" },
  { quote: "Getting a test done and speaking to the doctor happened on the same day.", name: "Soumya Banerjee" },
  { quote: "The clinic felt clean and organised, and the team was helpful throughout.", name: "Rahul Ghosh" },
];

/* ---------- FAQ ---------- */
export const faqs = [
  { q: "How do I book an appointment?", a: "Use the contact form, or call the clinic during opening hours. The team will confirm your slot." },
  { q: "Which treatments are available?", a: "Doctor consultations, physiotherapy, acupuncture, yoga therapy, Ayurveda and orthopaedics. See the Treatments page for details." },
  { q: "What diagnostic facilities are available?", a: "ECG and blood tests are available, along with diet and nutrition and gym / yoga facilities. Please check current availability with the clinic." },
  { q: "Where are your centres located?", a: "See the Our Centres page for addresses and opening hours." },
  { q: "Do I need a consultation first?", a: "If you are unsure where to start, book a consultation and the team will guide you to the right service." },
  { q: "How can I contact the clinic?", a: "Call or email using the details on the Contact page, or send an appointment request online." },
];

/* ---------- Appointment form options ---------- */
export const appointment = {
  visitTypes: ["First consultation", "Follow-up visit", "Diagnostic test", "Not sure"],
  services: ["Doctor's Chamber", "Physiotherapy", "Acupuncture", "Yoga Therapy", "Ayurveda", "Orthopaedics", "ECG", "Blood Tests", "Diet & Nutrition", "Gym / Yoga"],
  times: ["Morning (9 AM – 12 PM)", "Afternoon (12 – 4 PM)", "Evening (4 – 7 PM)"],
};
