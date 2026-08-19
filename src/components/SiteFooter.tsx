import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.heading}>O tym serwisie</p>
          <p className={styles.note}>
            Serwis dostępny pod adresem {site.domain} prezentuje przygodową, eksploracyjną
            grę przeglądarkową we wczesnej fazie produkcji oraz jej pierwszy, grywalny
            odcinek demonstracyjny. Status każdego elementu jest opisany wprost, bez
            obietnic dat premiery, których nie jesteśmy w stanie dotrzymać.
          </p>
        </div>
        <nav aria-label="Strona i rozgrywka">
          <p className={styles.heading}>Strona</p>
          <ul className={styles.list}>
            <li><Link href="/#o-grze">O grze</Link></li>
            <li><Link href="/#rozgrywka">Rozgrywka</Link></li>
            <li><Link href="/#rozdzialy">Rozdziały wyprawy</Link></li>
            <li><Link href="/graj">Zagraj w demo</Link></li>
          </ul>
        </nav>
        <nav aria-label="Informacje prawne">
          <p className={styles.heading}>Informacje</p>
          <ul className={styles.list}>
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            <li><Link href="/regulamin">Regulamin</Link></li>
            <li><Link href="/cookies">Pliki cookie</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {site.domain} — projekt w fazie produkcji.</span>
        <span>{site.contactEmail}</span>
      </div>
    </footer>
  );
}
