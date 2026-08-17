import type { Metadata } from "next";
import styles from "@/components/LegalLayout.module.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pliki cookie",
  description: "Jakie pliki cookie wykorzystuje serwis " + site.domain + " i jak zarządzać zgodą.",
};

export default function CookiesPage() {
  return (
    <div className={styles.wrap}>
      <span className={styles.kicker}>Informacje prawne</span>
      <h1 className={styles.h1}>Pliki cookie</h1>
      <p className={styles.updated}>Ostatnia aktualizacja: 17 sierpnia 2026 r.</p>

      <div className={styles.prose}>
        <h2>1. Czym są pliki cookie</h2>
        <p>
          Pliki cookie to niewielkie pliki tekstowe zapisywane przez przeglądarkę na urządzeniu
          użytkownika podczas korzystania ze strony internetowej. Pozwalają one m.in. zapamiętać
          preferencje użytkownika lub dostarczyć informacji o sposobie korzystania z serwisu.
        </p>

        <h2>2. Kategorie plików cookie w tym serwisie</h2>
        <p>
          <strong>Niezbędne</strong> — konieczne do podstawowego działania serwisu, np. do
          zapamiętania dokonanego wyboru w banerze zgody na cookie. Nie wymagają zgody i są
          zawsze aktywne. Przechowywane lokalnie w przeglądarce (localStorage) do czasu ich
          ręcznego usunięcia.
        </p>
        <p>
          <strong>Analityczne</strong> — pomagają zrozumieć, w jaki sposób odwiedzający
          korzystają z serwisu (np. które podstrony są najczęściej odwiedzane), co pozwala go
          rozwijać. Aktywowane wyłącznie po wyrażeniu zgody.
        </p>
        <p>
          <strong>Reklamowe</strong> — wykorzystywane do pomiaru skuteczności kampanii
          reklamowych prowadzonych m.in. w Google Ads oraz do ograniczenia liczby wyświetleń tej
          samej reklamy. Aktywowane wyłącznie po wyrażeniu zgody.
        </p>

        <h2>3. Zarządzanie zgodą</h2>
        <p>
          Przy pierwszej wizycie w serwisie wyświetlany jest baner umożliwiający zaakceptowanie
          wszystkich plików cookie, ograniczenie ich do niezbędnych lub dostosowanie wyboru dla
          poszczególnych kategorii. Aby zmienić wcześniej dokonany wybór, wystarczy usunąć dane
          strony {site.domain} w ustawieniach przeglądarki — baner zostanie wyświetlony ponownie
          przy kolejnej wizycie.
        </p>

        <h2>4. Cookie podmiotów trzecich</h2>
        <p>
          W przypadku wyrażenia zgody na kategorię reklamową lub analityczną, na urządzeniu
          użytkownika mogą zostać zapisane pliki cookie podmiotów trzecich, w tym Google LLC, w
          związku z usługami takimi jak Google Ads czy Google Analytics. Podmioty te działają
          jako odrębni administratorzy lub podmioty przetwarzające dane w zakresie własnych
          polityk prywatności.
        </p>

        <h2>5. Wyłączenie cookie w przeglądarce</h2>
        <p>
          Większość przeglądarek pozwala ograniczyć lub całkowicie zablokować zapisywanie
          plików cookie w ustawieniach prywatności. Należy pamiętać, że zablokowanie plików
          niezbędnych może wpłynąć na poprawne działanie niektórych funkcji serwisu, np.
          zapamiętywania wyboru dokonanego w banerze zgody.
        </p>

        <h2>6. Kontakt</h2>
        <p>
          Pytania dotyczące plików cookie można kierować na adres {site.contactEmail}.
        </p>
      </div>
    </div>
  );
}
