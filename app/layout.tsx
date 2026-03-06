import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: {
    default: "Orangutany Mushroom Guide",
    template: "%s | Orangutany Mushroom Guide",
  },
  description:
    "Identify mushrooms with real images, habitat info, look-alikes, and safety notes. Powered by AI trained on millions of species.",
  metadataBase: new URL("https://guide.orangutany.com"),
  openGraph: {
    siteName: "Orangutany Mushroom Guide",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
