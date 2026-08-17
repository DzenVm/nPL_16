import type { Metadata } from "next";
import styles from "./page.module.css";
import { PlayDemo } from "@/components/play/PlayDemo";

export const metadata: Metadata = {
  title: "Zagraj w demo",
  description:
    "Grywalny, skrócony fragment pierwszego rozdziału: przejdź przez wietrzną półkę skalną, wybierz ścieżkę i zbierz pierwszy fragment dziennika ekspedycji. Bez instalacji, bez konta, bez opłat.",
};

export default function GrajPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <span className={styles.kicker}>Wersja demonstracyjna · Rozdział 1</span>
        <h1 className={styles.h1}>Zagraj w skrócony fragment pierwszego rozdziału</h1>
        <p className={styles.lede}>
          To działający, grywalny wycinek gry — nie zapowiedź ani animacja. Przejdziesz przez
          wietrzną półkę skalną, wybierzesz jedną z dwóch ścieżek i zbierzesz pierwszy fragment
          dziennika ekspedycji. Zajmuje to około dwóch–trzech minut.
        </p>
        <p className={styles.notice}>
          To skrócona wersja demonstracyjna, nie pełny rozdział ani pełna gra. Grafika ma
          charakter koncepcyjny, a pozostałe rozdziały opisane na stronie głównej są w budowie
          lub w fazie planowania.
        </p>
      </header>

      <PlayDemo />

      <div className={styles.helpGrid}>
        <div className={styles.helpCard}>
          <strong>Sterowanie</strong>
          Wyłącznie kliknięcia lub dotyk — nie są potrzebne żadne klawisze skrótów ani gesty.
        </div>
        <div className={styles.helpCard}>
          <strong>Zapis postępu</strong>
          Demo nie zapisuje postępu między wizytami — to pojedynczy, krótki fragment do
          wypróbowania w jednej sesji.
        </div>
        <div className={styles.helpCard}>
          <strong>Dostępność</strong>
          Mechanika wskaźnika wiatru respektuje systemowe ustawienie „ogranicz animacje” —
          w takim wypadku krok jest zatwierdzany od razu, bez elementu czasowego.
        </div>
      </div>
    </div>
  );
}
