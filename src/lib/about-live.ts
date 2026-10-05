import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export type AboutBlock = { heading: string; description: string; image: string };

// Reads the existing `about` collection, doc `story`. Fields used exactly as stored: heading, description, imageUrl.
export async function fetchAboutStory(): Promise<AboutBlock | null> {
  const snap = await getDoc(doc(db, "about", "story"));
  if (!snap.exists()) return null;
  const d = snap.data() as { heading?: string; description?: string; imageUrl?: string };
  return { heading: d.heading ?? "", description: d.description ?? "", image: d.imageUrl ?? "" };
}
