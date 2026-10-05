import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type LiveSpecialist = { name: string; role: string; bio: string; days: string; image?: string };

// Reads the existing `specialists` Firestore collection (managed by the Admin Panel).
// Fields used, exactly as stored: active, name, role, bio, imageUrl, availableDays (array), order (string, sorted numerically).
export async function fetchActiveSpecialists(): Promise<LiveSpecialist[]> {
  const q = query(collection(db, "specialists"), where("active", "==", true));
  const snap = await getDocs(q);
  return snap.docs
    .map((doc) => {
      const d = doc.data() as {
        name?: string;
        role?: string;
        bio?: string;
        imageUrl?: string;
        availableDays?: string[];
        order?: string | number;
      };
      return {
        order: Number(d.order) || 0,
        item: {
          name: d.name ?? "",
          role: d.role ?? "",
          bio: d.bio ?? "",
          days: (d.availableDays ?? []).join(", "),
          image: d.imageUrl || undefined,
        } satisfies LiveSpecialist,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map((r) => r.item);
}
