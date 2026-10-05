import type { Metadata } from "next";
import { DM_Serif_Display, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";
import "./globals.css";

const display = DM_Serif_Display({ variable: "--font-display", subsets: ["latin", "latin-ext"], weight: "400", style: ["normal", "italic"] });
const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"] });
const bengali = Noto_Sans_Bengali({ variable: "--font-bengali", subsets: ["bengali"], preload: false });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.positioning,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${bengali.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
