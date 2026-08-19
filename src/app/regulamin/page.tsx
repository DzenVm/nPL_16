import type { Metadata } from "next";
import styles from "@/components/LegalLayout.module.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin korzystania z serwisu " + site.domain + " i dostępnej w nim wersji demonstracyjnej gry.",
};

export default function RegulaminPage() {
  return (
    <div className={styles.wrap}>
      <span className={styles.kicker}>Informacje prawne</span>
      <h1 className={styles.h1}>Regulamin korzystania z serwisu</h1>
      <p className={styles.updated}>Ostatnia aktualizacja: 17 sierpnia 2026 r.</p>

      <div className={styles.prose}>
        <h2>1. Postanowienia ogólne</h2>
        <p>
          Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod
          adresem {site.url} (dalej: „serwis”), w tym z prezentowanych w nim treści
          informacyjnych oraz przeglądarkowej wersji demonstracyjnej gry dostępnej pod adresem{" "}
          {site.url}/graj.
        </p>

        <h2>2. Definicje</h2>
        <ul>
          <li><strong>Serwis</strong> — strona internetowa dostępna pod adresem {site.domain}.</li>
          <li>
            <strong>Wersja demonstracyjna</strong> — udostępniony w przeglądarce, skrócony,
            grywalny fragment pierwszego rozdziału opisywanej gry, dostępny bez konieczności
            instalacji.
          </li>
          <li><strong>Użytkownik</strong> — każda osoba korzystająca z serwisu.</li>
        </ul>

        <h2>3. Charakter serwisu</h2>
        <p>
          Serwis ma charakter informacyjno-prezentacyjny i przedstawia projekt gry
          przeglądarkowej znajdujący się we wczesnej fazie produkcji. Status poszczególnych
          elementów (dostępny jako demo, w budowie, planowany) jest opisany wprost przy każdym z
          nich. Serwis nie stanowi sklepu z aplikacjami ani platformy dystrybucji gier. Poza
          opisaną wersją demonstracyjną, pełna wersja gry nie jest obecnie dostępna do pobrania.
        </p>

        <h2>4. Zasady korzystania</h2>
        <ul>
          <li>Korzystanie z serwisu i wersji demonstracyjnej jest dobrowolne.</li>
          <li>
            Wersja demonstracyjna nie wymaga zakładania konta ani podawania danych osobowych.
          </li>
          <li>
            Użytkownik zobowiązuje się do korzystania z serwisu w sposób zgodny z prawem i
            dobrymi obyczajami, w tym do niepodejmowania prób zakłócenia jego działania.
          </li>
          <li>
            Serwis przeznaczony jest do użytku niekomercyjnego przez osoby prywatne; treści nie
            mogą być kopiowane ani rozpowszechniane w celach komercyjnych bez zgody operatora.
          </li>
        </ul>

        <h2>5. Własność intelektualna</h2>
        <p>
          Teksty, ilustracje, mechanika wersji demonstracyjnej oraz układ graficzny serwisu
          stanowią przedmiot praw autorskich operatora serwisu, chyba że wskazano inaczej.
          Kopiowanie i rozpowszechnianie tych treści bez zgody operatora jest niedozwolone.
        </p>

        <h2>6. Odpowiedzialność</h2>
        <ul>
          <li>
            Operator dokłada starań, aby treści prezentowane w serwisie oraz wersja
            demonstracyjna działały poprawnie, jednak nie gwarantuje ich nieprzerwanego i
            wolnego od błędów działania.
          </li>
          <li>
            Operator nie ponosi odpowiedzialności za szkody wynikające z niewłaściwego
            korzystania z serwisu, przerw technicznych czy niekompatybilności z konkretnym
            urządzeniem lub przeglądarką.
          </li>
          <li>
            Serwis nie zawiera treści dla dorosłych. Ilustracje mają charakter koncepcyjny i
            mogą różnić się od docelowego wyglądu poszczególnych lokacji.
          </li>
        </ul>

        <h2>7. Reklamacje</h2>
        <p>
          Zgłoszenia dotyczące nieprawidłowego działania serwisu lub wersji demonstracyjnej
          można przesyłać na adres {site.contactEmail}, opisując krótko problem oraz urządzenie
          i przeglądarkę, na których wystąpił. Zgłoszenia rozpatrywane są w miarę możliwości w
          rozsądnym terminie, adekwatnym do wczesnej fazy produkcji projektu.
        </p>

        <h2>8. Zmiany regulaminu</h2>
        <p>
          Regulamin może być aktualizowany wraz z rozwojem serwisu i projektu. Aktualna wersja
          regulaminu jest zawsze dostępna pod tym adresem, wraz z datą ostatniej aktualizacji.
        </p>

        <h2>9. Postanowienia końcowe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
          polskiego. Zasady przetwarzania danych osobowych opisane są odrębnie w{" "}
          <a href="/polityka-prywatnosci">polityce prywatności</a>.
        </p>
      </div>
    </div>
  );
}
