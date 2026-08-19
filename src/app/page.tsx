import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { chapters } from "@/content/chapters";
import { mechanics } from "@/content/mechanics";
import { faq } from "@/content/faq";
import { gallery } from "@/content/gallery";
import { principles } from "@/content/principles";
import { site } from "@/content/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Strona główna",
  description:
    "Poznaj mechaniki, sześć rozdziałów przygodowej wyprawy wzdłuż wybrzeża i zagraj w pierwszy odcinek już teraz, w przeglądarce.",
};

const statusLabel: Record<string, string> = {
  demo: "Dostępny jako demo",
  "w-budowie": "W budowie",
  planowany: "Planowany",
};

const statusClass: Record<string, string> = {
  demo: styles.statusDemo!,
  "w-budowie": styles.statusBudowie!,
  planowany: styles.statusPlanowany!,
};

const chapterImage: Record<string, { src: string; alt: string }> = {
  "klify-startowe": { src: "/images/cliffs-dawn.svg", alt: "Wapienne klify o świcie" },
  "zatoka-suszonych-zagli": { src: "/images/compass-map.svg", alt: "Kompas na szkicu mapy zatoki" },
  "bursztynowe-wyrobiska": { src: "/images/amber-quarry.svg", alt: "Podziemna sztolnia bursztynowa" },
  "las-zawieszonych-mostow": { src: "/images/suspended-bridges.svg", alt: "Mosty zawieszone w koronach drzew" },
  "latarnia-ostatniego-sygnalu": { src: "/images/lighthouse-night.svg", alt: "Latarnia morska nocą" },
  "zatopione-archiwum": { src: "/images/sunken-archive.svg", alt: "Zatopione komnaty archiwum" },
};

function dayOfYear(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 86_400_000);
}

export default function HomePage() {
  const now = new Date();
  const todayLabel = new Intl.DateTimeFormat("pl-PL", { dateStyle: "full" }).format(now);
  const featured = chapters[dayOfYear(now) % chapters.length]!;
  const demoCount = chapters.filter((c) => c.status === "demo").length;
  const plannedCount = chapters.length - demoCount;

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Image src="/images/cliffs-dawn.svg" alt="" fill priority className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Stan na {todayLabel} · rozdział dnia: {featured.title}
          </span>
          <h1 className={styles.h1}>
            Przygodowa gra przeglądarkowa o <em>czytaniu wiatru</em>, rytmie przypływów i mapie,
            którą rysujesz sam.
          </h1>
          <p className={styles.heroLede}>
            Sześć rozdziałów wyprawy wzdłuż zapomnianego wybrzeża, bez walki i bez ekranów z
            prośbą o ocenę w sklepie. Pierwszy z nich możesz sprawdzić już teraz, w
            przeglądarce, bez instalacji.
          </p>
          <div className={styles.heroActions}>
            <Link href="/graj" className={styles.btnPrimary}>
              Zagraj w pierwszy rozdział
            </Link>
            <Link href="#o-grze" className={styles.btnSecondary}>
              Poznaj świat gry
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div>
              <div className={styles.statValue}>{chapters.length}</div>
              <div className={styles.statLabel}>rozdziałów wyprawy</div>
            </div>
            <div>
              <div className={styles.statValue}>{mechanics.length}</div>
              <div className={styles.statLabel}>mechanik eksploracji</div>
            </div>
            <div>
              <div className={styles.statValue}>0</div>
              <div className={styles.statLabel}>wymaganych instalacji</div>
            </div>
          </div>
        </div>
      </section>

      {/* O GRZE */}
      <section id="o-grze" className={styles.section}>
        <span className={styles.kicker}>O grze</span>
        <h2 className={styles.h2}>Wybrzeże, które co jakiś czas zmienia własną mapę</h2>
        <div className={styles.proseGrid}>
          <div className={styles.prose}>
            <p>
              Akcja rozgrywa się na wąskim pasie ziemi między klifami a morzem — miejscu, które
              wygląda inaczej za każdym razem, gdy wraca się w to samo miejsce. Wiatr wyznacza,
              które przejścia są dziś bezpieczne. Przypływ decyduje, które fragmenty dawnej
              osady w ogóle są dostępne. A światło przefiltrowane przez bursztyn w skałach
              potrafi ujawnić przejścia niewidoczne o każdej innej porze dnia.
            </p>
            <p>
              Gracz wciela się w kogoś, kto dokumentuje to wybrzeże, a nie próbuje go podbić
              czy „przejść”. Zamiast paska zdrowia i przeciwników najważniejszym zasobem jest
              uwaga: umiejętność odczytania podmuchu, zapamiętania cyklu przypływu i
              skojarzenia fragmentu notatki z miejscem, w którym można ją dokończyć.
            </p>
            <p className={styles.pullquote}>
              „Nie mapujemy tego wybrzeża, żeby je oswoić. Mapujemy je, bo ono samo bardzo tego
              nie chce.”
            </p>
            <p>
              Sześć rozdziałów prowadzi od nadmorskich klifów, przez zatopiony port i podziemne
              wyrobiska bursztynu, aż po zatopione archiwum pod dnem zatoki — miejsce, w którym
              wszystkie wcześniej poznane mechaniki spotykają się w jednym, finałowym ciągu
              pomieszczeń.
            </p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/compass-map.svg"
              alt="Ilustracja kompasu leżącego na odręcznie rysowanej mapie wybrzeża"
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption className={styles.figCaption}>
              Szkicownik trasy — jeden z motywów przewijających się przez wszystkie rozdziały.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ZASADY */}
      <section id="zasady" className={`${styles.section} ${styles.sectionTight}`}>
        <span className={styles.kicker}>Zasady, które nas prowadzą</span>
        <h2 className={styles.h2}>Sześć założeń projektowych, których się trzymamy</h2>
        <p className={styles.lede}>
          Zamiast listy funkcji, wolimy pokazać zasady, według których podejmujemy decyzje
          projektowe. Łatwiej wtedy ocenić, czy ten kierunek w ogóle jest dla Ciebie.
        </p>
        <div className={styles.principleList}>
          {principles.map((p) => (
            <div className={styles.principleRow} key={p.title}>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleText}>{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROZGRYWKA / MECHANIKI */}
      <section id="rozgrywka" className={styles.section}>
        <span className={styles.kicker}>Jak wygląda rozgrywka</span>
        <h2 className={styles.h2}>Pięć mechanik, które przenikają się przez całą wyprawę</h2>
        <p className={styles.lede}>
          Żadna z nich nie działa w oderwaniu od pozostałych. Im dalej w głąb wybrzeża, tym
          częściej trzeba łączyć je w obrębie jednej łamigłówki.
        </p>
        <div className={styles.grid3}>
          {mechanics.map((m, i) => (
            <div className={styles.card} key={m.slug}>
              <div className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.cardText}>{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROZDZIAŁY */}
      <section id="rozdzialy" className={`${styles.section} ${styles.sectionTight}`}>
        <span className={styles.kicker}>Rozdziały wyprawy</span>
        <h2 className={styles.h2}>Sześć biomów, sześć nastrojów, jeden szlak</h2>
        <p className={styles.lede}>
          Uczciwie oznaczamy status każdego rozdziału. Obecnie {demoCount}{" "}
          {demoCount === 1 ? "rozdział jest dostępny" : "rozdziałów jest dostępnych"} jako
          grywalne demo, a {plannedCount} pozostaje w budowie lub w planach. Dat premiery nie
          podajemy.
        </p>
        <div className={styles.chapterList}>
          {chapters.map((c) => (
            <article className={styles.chapterRow} key={c.slug}>
              <div className={styles.chapterIndex}>{String(c.index).padStart(2, "0")}</div>
              <div>
                <div className={styles.chapterTitleRow}>
                  <h3 className={styles.chapterTitle}>{c.title}</h3>
                </div>
                <p className={styles.chapterBiome}>{c.biome}</p>
                <p className={styles.chapterSummary}>{c.summary}</p>
                <div className={styles.chapterMeta}>
                  <span className={styles.tag}>{c.mechanic}</span>
                  <span className={`${styles.status} ${statusClass[c.status]}`}>
                    {statusLabel[c.status]}
                  </span>
                </div>
              </div>
              <div className={styles.chapterAside}>
                {c.status === "demo" ? (
                  <Link href="/graj" className={styles.chapterAction}>
                    Zagraj →
                  </Link>
                ) : (
                  <span className={styles.chapterAction} style={{ color: "var(--color-mist-300)" }}>
                    {chapterImage[c.slug]?.alt}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className={styles.section}>
        <span className={styles.kicker}>Galeria</span>
        <h2 className={styles.h2}>Kilka kadrów z wybrzeża</h2>
        <p className={styles.lede}>
          Ilustracje koncepcyjne przedstawiające nastrój poszczególnych rozdziałów i motywów
          przewijających się przez rozgrywkę.
        </p>
        <div className={styles.galleryGrid}>
          {gallery.map((g) => (
            <figure className={styles.galleryItem} key={g.src}>
              <div className={styles.galleryImgWrap}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 720px) 33vw, 50vw"
                  className={styles.galleryImg}
                />
              </div>
              <figcaption className={styles.galleryCaption}>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WYMAGANIA / DOSTĘPNOŚĆ */}
      <section id="dostepnosc" className={`${styles.section} ${styles.sectionTight}`}>
        <span className={styles.kicker}>Wymagania i dostępność</span>
        <h2 className={styles.h2}>Zanim zaczniesz: kilka konkretów zamiast obietnic</h2>
        <div className={styles.reqList}>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Platforma</span>
            <span className={styles.reqValue}>
              Wyłącznie przeglądarka internetowa, na telefonie, tablecie lub komputerze. Bez
              instalacji, bez konta.
            </span>
          </div>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Wymagania techniczne</span>
            <span className={styles.reqValue}>
              Aktualna przeglądarka z obsługą JavaScript i elementu canvas. Brak wymagań co do
              systemu operacyjnego.
            </span>
          </div>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Sterowanie</span>
            <span className={styles.reqValue}>
              Wyłącznie kliknięcia i dotyk. Do ukończenia fragmentu demonstracyjnego nie są
              potrzebne żadne skróty klawiszowe ani gesty.
            </span>
          </div>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Sugerowany wiek</span>
            <span className={styles.reqValue}>
              Treści są pozbawione przemocy. Nasza opisowa rekomendacja to około 12 lat, bez
              oficjalnej klasyfikacji wiekowej.
            </span>
          </div>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Dostępność</span>
            <span className={styles.reqValue}>
              Pełna obsługa klawiatury, widoczny fokus, respektowanie systemowego ustawienia
              „ogranicz animacje” oraz kontrast tekstu zgodny z WCAG AA.
            </span>
          </div>
          <div className={styles.reqRow}>
            <span className={styles.reqLabel}>Dane i prywatność</span>
            <span className={styles.reqValue}>
              Szczegóły w{" "}
              <Link href="/polityka-prywatnosci" style={{ color: "var(--color-amber-300)" }}>
                polityce prywatności
              </Link>{" "}
              oraz{" "}
              <Link href="/cookies" style={{ color: "var(--color-amber-300)" }}>
                polityce plików cookie
              </Link>
              .
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <span className={styles.kicker}>Pytania i odpowiedzi</span>
        <h2 className={styles.h2}>Może odpowiedź jest już tutaj, zanim do nas napiszesz</h2>
        <div className={styles.faqList}>
          {faq.map((f) => (
            <details className={styles.faqItem} key={f.question}>
              <summary>{f.question}</summary>
              <p className={styles.faqAnswer}>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <span className={styles.kicker} style={{ justifyContent: "center" }}>
            Zacznij od pierwszego rozdziału
          </span>
          <h2 className={styles.h2} style={{ margin: "0 auto" }}>
            Klify czekają, a wiatr i tak zmieni kierunek, zanim zdążysz się rozmyślić
          </h2>
          <div className={styles.finalCtaActions}>
            <Link href="/graj" className={styles.btnPrimary}>
              Zagraj teraz
            </Link>
            <Link href="/kontakt" className={styles.btnSecondary}>
              Napisz do nas
            </Link>
          </div>
          <p className={styles.finalNote}>
            Serwis {site.domain} znajduje się w fazie produkcji. Rozdział dostępny jako demo:{" "}
            {chapters.find((c) => c.status === "demo")?.title}.
          </p>
        </div>
      </section>
    </>
  );
}
