import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Reads the existing `legalPages` collection. Field used exactly as stored: content (HTML string).
export async function fetchLegalContent(id: string): Promise<string | null> {
  const snap = await getDoc(doc(db, "legalPages", id));
  if (!snap.exists()) return null;
  const content = (snap.data() as { content?: string }).content;
  return content && content.trim() ? content : null;
}
