import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import type { ExplorerItem } from "@/components/treatment-explorer";

// Reads the existing `treatments` Firestore collection (managed by the Admin Panel).
// Fields used, exactly as stored: active, category, name, shortDescription, fullDescription, imageUrl, order.
// Sorted client-side (not orderBy in the query) to avoid requiring a composite Firestore index.
export async function fetchActiveTreatments(): Promise<ExplorerItem[]> {
  const q = query(collection(db, "treatments"), where("active", "==", true));
  const snap = await getDocs(q);
  const rows = snap.docs.map((doc) => {
    const d = doc.data() as {
      category?: string;
      name?: string;
      shortDescription?: string;
      fullDescription?: string;
      imageUrl?: string;
      order?: number;
    };
    const hasDetail = !!d.fullDescription && d.fullDescription !== d.shortDescription;
    return {
      order: d.order ?? 0,
      item: {
        id: doc.id,
        category: d.category ?? "",
        name: d.name ?? "",
        text: d.shortDescription ?? "",
        points: hasDetail ? [d.fullDescription as string] : [],
        pointsLabel: hasDetail ? "More about this treatment" : "",
        image: d.imageUrl ?? "",
        alt: d.name ?? "",
        href: `/treatments#${doc.id}`,
      } satisfies ExplorerItem,
    };
  });
  return rows.sort((a, b) => a.order - b.order).map((r) => r.item);
}
