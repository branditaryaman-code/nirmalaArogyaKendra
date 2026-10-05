import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type LiveLocation = { address: string; phone: string; email: string; whatsapp: string; mapSrc: string };

// Reads the existing `contact` Firestore collection (managed by the Admin Panel).
// Documents (e.g. location1, location2), fields used exactly as stored: address, phone, email, whatsapp, iframe (raw embed HTML; src extracted).
export async function fetchContactLocations(): Promise<LiveLocation[]> {
  const snap = await getDocs(collection(db, "contact"));
  return snap.docs
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((doc) => {
      const d = doc.data() as { address?: string; phone?: string; email?: string; whatsapp?: string; iframe?: string };
      const match = d.iframe?.match(/src="([^"]+)"/);
      return { address: d.address ?? "", phone: d.phone ?? "", email: d.email ?? "", whatsapp: d.whatsapp ?? "", mapSrc: match?.[1] ?? "" };
    });
}
