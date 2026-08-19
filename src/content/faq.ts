import { faqItemSchema, type FaqItem } from "./schema";

const raw: FaqItem[] = [
  {
    question: "Czy trzeba coś instalować, żeby zagrać w wersję demonstracyjną?",
    answer:
      "Nie. Odcinek demonstracyjny działa bezpośrednio w przeglądarce, na stronie „Zagraj”, bez pobierania żadnego pliku ani zakładania konta.",
  },
  {
    question: "Czy pełna gra jest już dostępna do pobrania w sklepach z aplikacjami?",
    answer:
      "Nie. Projekt jest we wczesnej fazie produkcji. Poza pierwszym rozdziałem, dostępnym jako przeglądarkowa wersja demonstracyjna, pozostałe elementy opisane na tej stronie są w budowie lub w fazie planowania, co zawsze zaznaczamy przy każdym rozdziale.",
  },
  {
    question: "Czy demo działa płynnie na starszych telefonach?",
    answer:
      "Powinno. Zamiast ciężkiego silnika graficznego mechanika wskaźnika wiatru korzysta z prostego rysowania na płótnie canvas, a cząsteczki w tle to kilkadziesiąt niewielkich kropek, nie rozbudowana symulacja. Jeśli mimo to coś działa u Ciebie wolno, daj nam znać przez stronę „Kontakt”.",
  },
  {
    question: "Czy gra zawiera przemoc, elementy dla dorosłych albo treści niepokojące dla młodszych odbiorców?",
    answer:
      "Nie ma tu walki, przeciwników ani scen przemocy. Klimat bywa melancholijny (opuszczone miejsca, wątki zaginięcia), ale bez drastycznych treści. Uznajemy tę produkcję za odpowiednią dla graczy od około 12. roku życia, choć jest to nasza opisowa ocena, a nie oficjalna klasyfikacja wiekowa.",
  },
  {
    question: "Na jakich urządzeniach działa wersja demonstracyjna?",
    answer:
      "Demo zostało zaprojektowane pod kątem przeglądarek na telefonach i tabletach, ale działa też na komputerze. Potrzebna jest jedynie aktualna przeglądarka z obsługą JavaScriptu i elementu canvas. Nie ma żadnych wymagań co do systemu operacyjnego.",
  },
  {
    question: "Jakie dane są zbierane podczas korzystania z serwisu?",
    answer:
      "Zakres i cel przetwarzania danych, w tym plików cookie wykorzystywanych do analityki i ewentualnej personalizacji reklam, opisujemy szczegółowo na stronach „Polityka prywatności” i „Pliki cookie”. Preferencje dotyczące cookie można w każdej chwili zmienić w banerze zgody.",
  },
  {
    question: "Kiedy pojawi się kolejny rozdział albo pełna wersja gry?",
    answer:
      "Nie podajemy sztywnej daty premiery, żeby nie składać obietnic, których moglibyśmy nie dotrzymać. Status każdego rozdziału (demo, w budowie lub planowany) aktualizujemy na bieżąco w sekcji „Rozdziały wyprawy”.",
  },
  {
    question: "Znalazłem błąd w wersji demonstracyjnej albo mam uwagę. Gdzie to zgłosić?",
    answer:
      "Najlepiej przez stronę „Kontakt”. Opisz krótko, co się stało i na jakim urządzeniu, a chętnie się temu przyjrzymy.",
  },
];

export const faq: FaqItem[] = raw.map((f) => faqItemSchema.parse(f));
