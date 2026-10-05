import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type LiveCentre = { name: string; address: string; phone: string; hours: string; services: string[]; image?: string };

// Reads the existing `centres` Firestore collection (managed by the Admin Panel).
// Fields used, exactly as stored: active, name, address, phone, hours, services (array), imageUrl, order (string, sorted numerically).
export async function fetchActiveCentres(): Promise<LiveCentre[]> {
  const q = query(collection(db, "centres"), where("active", "==", true));
  const snap = await getDocs(q);
  return snap.docs
    .map((doc) => {
      const d = doc.data() as {
        name?: string;
        address?: string;
        phone?: string;
        hours?: string;
        services?: string[];
        imageUrl?: string;
        order?: string | number;
      };
      return {
        order: Number(d.order) || 0,
        item: {
          name: d.name ?? "",
          address: d.address ?? "",
          phone: d.phone ?? "",
          hours: d.hours ?? "",
          services: d.services ?? [],
          image: d.imageUrl || undefined,
        } satisfies LiveCentre,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map((r) => r.item);
}
