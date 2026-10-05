import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export type ApproachData = { eyebrow: string; heading: string; steps: { title: string; text: string }[] };

// Reads the existing `ourApproach` collection, doc `main`.
// Fields used exactly as stored: eyebrow, heading, active, steps[] (title, description).
export async function fetchOurApproach(): Promise<ApproachData | null> {
  const snap = await getDoc(doc(db, "ourApproach", "main"));
  if (!snap.exists()) return null;
  const d = snap.data() as { eyebrow?: string; heading?: string; active?: boolean; steps?: { title?: string; description?: string }[] };
  if (d.active === false) return null;
  return {
    eyebrow: d.eyebrow ?? "",
    heading: d.heading ?? "",
    steps: (d.steps ?? []).map((s) => ({ title: s.title ?? "", text: s.description ?? "" })),
  };
}
