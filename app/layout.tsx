import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { websiteSchema } from "@/lib/schema";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: {
    default: "Orangutany Guide — Real Mushroom Knowledge for Real Foragers",
    template: "%s | Orangutany",
  },
  description:
    "We love mushrooms as much as you do. 100+ species with real photos, safety data, look-alikes, distribution maps, and honest foraging guides. Precision-engineered in Canada.",
  metadataBase: new URL("https://guide.orangutany.com"),
  keywords: [
    "mushroom identification",
    "mushroom ID app",
    "identify mushroom from photo",
    "mushroom foraging guide",
    "poisonous mushroom identification",
    "edible mushroom guide",
    "mycology",
    "wild mushroom safety",
    "orangutany",
  ],
  openGraph: {
    siteName: "Orangutany",
    type: "website",
    locale: "en_CA",
    description:
      "We love mushrooms as much as you do. 100+ species with real photos, safety data, look-alikes, and honest foraging guides. Precision-engineered in Canada.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
