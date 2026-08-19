import { mechanicSchema, type Mechanic } from "./schema";

const raw: Mechanic[] = [
  {
    slug: "wiatr",
    title: "Nawigacja wiatrem",
    summary: "To samo zjawisko jest tu i przeszkodą, i narzędziem: podmuchy trzeba czytać, nie tylko przetrwać.",
    detail:
      "Na wskaźniku podmuchu widać siłę i kierunek wiatru z wyprzedzeniem kilku sekund. Zbyt wczesny krok kończy się zepchnięciem z półki skalnej, zbyt późny kończy się brakiem rozpędu, by przesadzić szczelinę. Z czasem gracz uczy się wykorzystywać silniejsze porywy do skoków, na które normalnie nie byłoby miejsca.",
  },
  {
    slug: "przyplywy",
    title: "Rytm przypływów",
    summary: "Część mapy pokazuje się na kilka minut na dobę. Resztę czasu spędza pod wodą.",
    detail:
      "Poziom wody zmienia się w przewidywalnym, ale ciasnym cyklu. Niektóre przejścia otwierają się tylko przy najniższym stanie wody, inne znikają na długo, zanim gracz zdąży wrócić tą samą drogą. Planowanie trasy z wyprzedzeniem staje się tu ważniejsze niż sam refleks.",
  },
  {
    slug: "soczewki",
    title: "Bursztynowe soczewki",
    summary: "Zbierane fragmenty żywicy skupiają, rozpraszają lub barwią światło padające przez skałę.",
    detail:
      "Każda soczewka inaczej reaguje na światło wpadające przez szczeliny w skałach lub sklepieniach. Łącząc je w odpowiedniej kolejności, gracz kieruje promień w konkretne miejsce: na mechanizm otwierający bramę, na runę, którą trzeba odczytać, albo na kolejną soczewkę dalej w korytarzu.",
  },
  {
    slug: "dziennik",
    title: "Dziennik ekspedycji",
    summary: "Fragmenty map, listów i notatek zbierane po drodze układają się w opowieść bez narzuconej kolejności.",
    detail:
      "Zamiast liniowej fabuły podawanej w kolejnych przerywnikach, historia składa się z rozrzuconych po trasie zapisków. Gracz sam decyduje, w jakiej kolejności je odnajdzie, co oznacza, że dwie osoby grające ten sam rozdział mogą poznać tę samą historię w zupełnie innej kolejności.",
  },
  {
    slug: "szkicownik",
    title: "Szkicownik trasy",
    summary: "Gracz rysuje mapę sam, w miarę odkrywania kolejnych przejść. Nie dostaje jej gotowej.",
    detail:
      "Zamiast gotowej minimapy gracz dostaje pustą kartkę, która zapełnia się automatycznie po odkryciu nowego fragmentu terenu, ale w sposób celowo przypominający odręczny szkic, a nie precyzyjny plan. To sprawia, że powrót do wcześniej odwiedzonego miejsca bywa równie trudny, co dotarcie tam po raz pierwszy.",
  },
];

export const mechanics: Mechanic[] = raw.map((m) => mechanicSchema.parse(m));
