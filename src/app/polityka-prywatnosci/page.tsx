import type { Metadata } from "next";
import styles from "@/components/LegalLayout.module.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych i plików cookie w serwisie " + site.domain + ".",
  robots: { index: true, follow: true },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className={styles.wrap}>
      <span className={styles.kicker}>Informacje prawne</span>
      <h1 className={styles.h1}>Polityka prywatności</h1>
      <p className={styles.updated}>Ostatnia aktualizacja: 17 sierpnia 2026 r.</p>

      <div className={styles.prose}>
        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych przetwarzanych w związku z korzystaniem z serwisu dostępnego
          pod adresem {site.url} jest operator tego serwisu. Ze względu na wczesną fazę
          produkcji projektu pełne dane rejestrowe operatora udostępniane są na indywidualne
          żądanie, przesłane na adres {site.contactEmail}.
        </p>

        <h2>2. Jakie dane przetwarzamy</h2>
        <p>Podczas korzystania z serwisu mogą być przetwarzane następujące kategorie danych:</p>
        <ul>
          <li>
            Dane techniczne generowane automatycznie podczas przeglądania (adres IP, typ
            przeglądarki, system operacyjny, przybliżona lokalizacja na poziomie kraju lub
            miasta, odwiedzane podstrony, znaczniki czasu) — przetwarzane w ramach logów
            serwera i, po wyrażeniu zgody, narzędzi analitycznych.
          </li>
          <li>
            Dane zapisywane w plikach cookie i podobnych technologiach, w tym preferencje
            dotyczące zgody na cookie — szczegóły w{" "}
            <a href="/cookies">polityce plików cookie</a>.
          </li>
          <li>
            Dane podane dobrowolnie w wiadomości e-mail wysłanej na adres kontaktowy (adres
            e-mail nadawcy oraz treść wiadomości).
          </li>
        </ul>
        <p>
          Serwis nie wymaga zakładania konta, a wersja demonstracyjna gry dostępna pod adresem{" "}
          <a href="/graj">/graj</a> nie zapisuje żadnych danych o przebiegu rozgrywki poza
          pamięcią przeglądarki w trakcie trwania sesji.
        </p>

        <h2>3. Cele i podstawy prawne przetwarzania</h2>
        <ul>
          <li>
            Zapewnienie prawidłowego działania serwisu i bezpieczeństwa — art. 6 ust. 1 lit. f
            RODO (prawnie uzasadniony interes administratora).
          </li>
          <li>
            Analiza ruchu i sposobu korzystania z serwisu, w celu jego rozwoju — wyłącznie po
            wyrażeniu zgody w banerze cookie — art. 6 ust. 1 lit. a RODO.
          </li>
          <li>
            Pomiar skuteczności kampanii reklamowych, w tym prowadzonych w Google Ads —
            wyłącznie po wyrażeniu zgody na pliki cookie reklamowe — art. 6 ust. 1 lit. a RODO.
          </li>
          <li>
            Odpowiedź na wiadomość przesłaną na adres kontaktowy — art. 6 ust. 1 lit. f RODO
            (uzasadniony interes w postaci obsługi korespondencji).
          </li>
        </ul>

        <h2>4. Pliki cookie</h2>
        <p>
          Serwis wykorzystuje pliki cookie niezbędne do działania oraz — wyłącznie za zgodą
          użytkownika wyrażoną w banerze widocznym przy pierwszej wizycie — pliki analityczne i
          reklamowe. Zgodę można wycofać lub zmienić w dowolnym momencie poprzez wyczyszczenie
          danych przeglądarki dla tej domeny. Pełny opis kategorii cookie znajduje się w{" "}
          <a href="/cookies">polityce plików cookie</a>.
        </p>

        <h2>5. Odbiorcy danych</h2>
        <p>
          Dane mogą być przekazywane podmiotom zapewniającym hosting i infrastrukturę serwisu
          oraz — wyłącznie w zakresie plików cookie, na które użytkownik wyraził zgodę —
          dostawcom narzędzi analitycznych i reklamowych, w tym Google LLC w ramach usług
          takich jak Google Ads czy Google Analytics. Dostawcy ci mogą przetwarzać dane poza
          Europejskim Obszarem Gospodarczym, stosując mechanizmy zgodności przewidziane przez
          RODO (takie jak standardowe klauzule umowne).
        </p>

        <h2>6. Okres przechowywania danych</h2>
        <p>
          Dane w logach technicznych przechowywane są nie dłużej niż jest to konieczne dla
          zapewnienia bezpieczeństwa serwisu. Dane zapisane w plikach cookie przechowywane są
          przez okres wskazany w <a href="/cookies">polityce plików cookie</a>. Korespondencja
          e-mail przechowywana jest przez czas niezbędny do udzielenia odpowiedzi i rozliczenia
          zgłoszenia.
        </p>

        <h2>7. Prawa użytkownika</h2>
        <p>Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
        <ul>
          <li>dostępu do swoich danych oraz uzyskania ich kopii,</li>
          <li>sprostowania (poprawienia) danych,</li>
          <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie,</li>
          <li>przenoszenia danych,</li>
          <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że
            przetwarzanie narusza przepisy RODO.
          </li>
        </ul>

        <h2>8. Bezpieczeństwo danych</h2>
        <p>
          Stosujemy środki techniczne i organizacyjne odpowiednie do charakteru i zakresu
          przetwarzanych danych, w tym szyfrowane połączenie (HTTPS) oraz ograniczenie dostępu
          do danych wyłącznie do osób, którym jest to niezbędne.
        </p>

        <h2>9. Zmiany polityki</h2>
        <p>
          Ze względu na wczesną fazę produkcji projektu treść tej polityki może się zmieniać
          wraz z rozwojem serwisu. Aktualna wersja jest zawsze dostępna pod tym adresem, wraz z
          datą ostatniej aktualizacji.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem{" "}
          {site.contactEmail}.
        </p>
      </div>
    </div>
  );
}
