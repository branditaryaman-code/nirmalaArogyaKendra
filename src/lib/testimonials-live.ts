import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type LiveTestimonial = { name: string; quote: string };

// Reads the existing `testimonials` collection.
// Fields used exactly as stored: active, order (string), name, review.
export async function fetchActiveTestimonials(): Promise<LiveTestimonial[]> {
  const q = query(collection(db, "testimonials"), where("active", "==", true));
  const snap = await getDocs(q);
  return snap.docs
    .map((doc) => {
      const d = doc.data() as { name?: string; review?: string; order?: string | number };
      return { order: Number(d.order) || 0, name: d.name ?? "", quote: d.review ?? "" };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ name, quote }) => ({ name, quote }));
}
