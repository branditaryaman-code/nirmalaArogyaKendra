import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type YogaBlock = { heading: string; description: string; image: string };
export type YogaBatch = { batch: string; time: string; days: string };

// Reads the existing `yoga` collection. Docs used, fields exactly as stored: heading, description, imageUrl.
async function fetchYogaDoc(id: string): Promise<YogaBlock | null> {
  const snap = await getDoc(doc(db, "yoga", id));
  if (!snap.exists()) return null;
  const d = snap.data() as { heading?: string; description?: string; imageUrl?: string };
  return { heading: d.heading ?? "", description: d.description ?? "", image: d.imageUrl ?? "" };
}
export const fetchYogaIntro = () => fetchYogaDoc("intro");

// Reads the existing `yogaSessions` collection.
// Fields used exactly as stored: active, order (string), batchName, startTime, endTime, days.
export async function fetchYogaBatches(): Promise<YogaBatch[]> {
  const q = query(collection(db, "yogaSessions"), where("active", "==", true));
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => {
      const v = d.data() as { batchName?: string; startTime?: string; endTime?: string; days?: string; order?: string | number };
      return {
        order: Number(v.order) || 0,
        batch: v.batchName ?? "",
        time: [v.startTime, v.endTime].filter(Boolean).join(" – "),
        days: v.days ?? "",
      };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ batch, time, days }) => ({ batch, time, days }));
}
