import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type LiveFaq = { q: string; a: string };

// Reads the existing `faqs` collection.
// Fields used exactly as stored: active, order (string), question, answer.
export async function fetchActiveFaqs(): Promise<LiveFaq[]> {
  const q = query(collection(db, "faqs"), where("active", "==", true));
  const snap = await getDocs(q);
  return snap.docs
    .map((doc) => {
      const d = doc.data() as { question?: string; answer?: string; order?: string | number };
      return { order: Number(d.order) || 0, q: d.question ?? "", a: d.answer ?? "" };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ q, a }) => ({ q, a }));
}
