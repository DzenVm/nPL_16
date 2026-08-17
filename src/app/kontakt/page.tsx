import type { Metadata } from "next";
import styles from "@/components/LegalLayout.module.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Jak skontaktować się w sprawie serwisu " + site.domain + " — zgłoszenia błędów, uwagi, pytania.",
};

export default function KontaktPage() {
  return (
    <div className={styles.wrap}>
      <span className={styles.kicker}>Kontakt</span>
      <h1 className={styles.h1}>Napisz do nas</h1>
      <p className={styles.updated}>Odpowiadamy najczęściej w ciągu kilku dni roboczych.</p>

      <div className={styles.prose}>
        <p>
          Ten projekt jest we wczesnej fazie produkcji, więc każda wiadomość — błąd w wersji
          demonstracyjnej, literówka w opisie rozdziału, pytanie o rozwój wybrzeża, którego
          jeszcze nie zbudowaliśmy — realnie na coś wpływa.
        </p>

        <h2>Adres e-mail</h2>
        <p>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>

        <h2>Co warto napisać</h2>
        <ul>
          <li>Na jakim urządzeniu i w jakiej przeglądarce coś nie zadziałało.</li>
          <li>Na którym etapie wersji demonstracyjnej wystąpił problem.</li>
          <li>Czy zgłoszenie dotyczy treści, mechaniki, czy samej strony.</li>
        </ul>

        <h2>Sprawy dotyczące prywatności</h2>
        <p>
          Pytania związane z przetwarzaniem danych osobowych i plikami cookie prosimy kierować
          na ten sam adres, z dopiskiem „prywatność” w temacie — przyspiesza to obsługę
          zgłoszenia. Szczegóły znajdziesz w{" "}
          <a href="/polityka-prywatnosci">polityce prywatności</a>.
        </p>
      </div>
    </div>
  );
}
