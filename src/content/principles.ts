import { principleSchema, type Principle } from "./schema";

const raw: Principle[] = [
  {
    title: "Bez presji czasu na wynik",
    detail:
      "Rytm przypływów czy wiatru dotyczy pojedynczych przejść, nie całej rozgrywki. Nie ma tu punktacji za szybkość ani kar za powolne zwiedzanie. Można usiąść na klifie i po prostu popatrzeć na mgłę.",
  },
  {
    title: "Ilustracje bez udawania czegoś więcej",
    detail:
      "Obrazy w galerii to szkice nastroju poszczególnych miejsc, nie zrzuty ekranu z gotowej gry. Piszemy to wprost przy każdej ilustracji, zamiast liczyć na to, że nikt nie zapyta.",
  },
  {
    title: "Historia bez narzuconej kolejności",
    detail:
      "Fragmenty dziennika ekspedycji można odnaleźć w dowolnej kolejności. Zamiast prowadzić gracza za rękę przez kolejne przerywniki filmowe, pozwalamy mu samodzielnie poskładać opowieść z tego, co uda mu się znaleźć.",
  },
  {
    title: "Uczciwy status produkcji",
    detail:
      "Przy każdym rozdziale jasno oznaczamy, czy jest już dostępny jako demo, czy dopiero powstaje. Nie publikujemy dat premiery, których nie jesteśmy w stanie dotrzymać, ani liczb graczy, których nie potrafimy zweryfikować.",
  },
  {
    title: "Lekkość techniczna",
    detail:
      "Wersja demonstracyjna działa w przeglądarce bez pobierania i celowo unika ciężkich silników graficznych. Animacje cząsteczek wiatru i bursztynu renderujemy bezpośrednio na płótnie canvas, bez zewnętrznych bibliotek graficznych.",
  },
  {
    title: "Dostępność jako punkt wyjścia",
    detail:
      "Kontrast tekstu, obsługa nawigacji klawiaturą i szanowanie systemowego ustawienia „ogranicz animacje” nie są dodatkiem na później. Sprawdzamy je od pierwszej wersji każdej podstrony.",
  },
];

export const principles: Principle[] = raw.map((p) => principleSchema.parse(p));
