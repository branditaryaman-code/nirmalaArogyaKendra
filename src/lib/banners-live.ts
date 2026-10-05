import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export type LiveBanner = {
  label: string;
  title: string;
  text: string;
  image: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
};

// Reads the existing `banners` collection (shared across pages via the `page` field).
// Fields used exactly as stored: page, active, order (string), eyebrow, heading, subText, imageUrl, button1Text/Link, button2Text/Link.
export async function fetchBanners(page: string): Promise<LiveBanner[]> {
  const q = query(collection(db, "banners"), where("page", "==", page), where("active", "==", true));
  const snap = await getDocs(q);
  const rows = snap.docs
    .map((doc) => {
      const v = doc.data() as {
        eyebrow?: string;
        heading?: string;
        subText?: string;
        imageUrl?: string;
        button1Text?: string;
        button1Link?: string;
        button2Text?: string;
        button2Link?: string;
        order?: string | number;
      };
      return {
        order: Number(v.order) || 0,
        item: {
          label: v.eyebrow ?? "",
          title: v.heading ?? "",
          text: v.subText ?? "",
          image: v.imageUrl ?? "",
          button1Text: v.button1Text ?? "",
          button1Link: v.button1Link ?? "",
          button2Text: v.button2Text ?? "",
          button2Link: v.button2Link ?? "",
        } satisfies LiveBanner,
      };
    })
    .sort((a, b) => a.order - b.order);
  return rows.map((r) => r.item);
}
