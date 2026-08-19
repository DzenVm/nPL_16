import type { Metadata, Viewport } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Przygodowa gra przeglądarkowa o wietrze i przypływach | " + site.domain,
    template: "%s | " + site.domain,
  },
  description:
    "Przeglądarkowa gra przygodowa: czytaj wiatr, planuj trasę pod przypływy i składaj historię z odnalezionych notatek. Pierwszy rozdział dostępny jako grywalne demo, bez instalacji.",
  applicationName: site.domain,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.domain,
    title: "Przygodowa gra przeglądarkowa o wietrze i przypływach",
    description:
      "Czytaj wiatr, planuj trasę pod przypływy i składaj historię z notatek znalezionych po drodze. Bez przemocy i bez pośpiechu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Przygodowa gra przeglądarkowa o wietrze i przypływach",
    description:
      "Czytaj wiatr, planuj trasę pod przypływy i składaj historię z notatek znalezionych po drodze. Bez przemocy i bez pośpiechu.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f14",
  colorScheme: "dark",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.domain,
  url: site.url,
  inLanguage: site.language,
  description:
    "Przeglądarkowa gra przygodowa we wczesnej fazie produkcji, z grywalnym demem pierwszego rozdziału.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${sora.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
