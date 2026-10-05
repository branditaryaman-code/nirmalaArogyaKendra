import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import type { DiagnosticsItem } from "@/components/diagnostics-wl";

// Reads the existing `diagnostics` Firestore collection (managed by the Admin Panel).
// Fields used, exactly as stored: active, name, shortDescription, imageUrl, section ("diagnostics" | "wellness").
export async function fetchActiveDiagnosticsBySection(): Promise<{ diagnostics: DiagnosticsItem[]; wellness: DiagnosticsItem[] }> {
  const q = query(collection(db, "diagnostics"), where("active", "==", true));
  const snap = await getDocs(q);
  const diagnostics: DiagnosticsItem[] = [];
  const wellness: DiagnosticsItem[] = [];
  snap.docs.forEach((doc) => {
    const d = doc.data() as { name?: string; shortDescription?: string; imageUrl?: string; section?: string };
    const item: DiagnosticsItem = {
      id: doc.id,
      name: d.name ?? "",
      text: d.shortDescription ?? "",
      image: d.imageUrl ?? "",
      alt: d.name ?? "",
      pos: "50% 50%",
      href: `/diagnostics#${doc.id}`,
    };
    if (d.section === "diagnostics") diagnostics.push(item);
    else if (d.section === "wellness") wellness.push(item);
  });
  return { diagnostics, wellness };
}
