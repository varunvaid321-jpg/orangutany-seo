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
    default: "Orangutany — Premium Mushroom Identification | Built in Canada",
    template: "%s | Orangutany",
  },
  description:
    "Expert mushroom identification powered by machine learning trained on millions of observations. Real photos, distribution maps, safety data, and look-alikes for 100+ species. Built in Canada.",
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
      "Expert mushroom identification powered by machine learning. Real photos, safety data, and look-alikes. Built in Canada.",
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
