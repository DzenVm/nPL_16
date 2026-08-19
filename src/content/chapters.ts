import { chapterSchema, type Chapter } from "./schema";

const raw: Chapter[] = [
  {
    slug: "klify-startowe",
    index: 1,
    title: "Klify Startowe",
    biome: "Wapienne urwiska spowite poranną mgłą",
    mechanic: "Nawigacja wiatrem",
    summary:
      "Pierwszy odcinek trasy: uczysz się czytać podmuchy i stawiasz pierwsze kroki po wąskich, wietrznych półkach skalnych.",
    detail:
      "To tutaj zaczyna się każda wyprawa. Klify są strome, ścieżki wąskie, a wiatr zmienia kierunek co kilkanaście sekund. To on decyduje, które przejście jest bezpieczne, a które kończy się upadkiem w dół, do rozbryzgującej się o skały piany. Gracz uczy się odczytywać wskaźnik podmuchu, wyczuwać moment ciszy między porywami i wykorzystywać silniejsze uderzenia wiatru do przesadzenia przez szczeliny zbyt szerokie na zwykły krok. Rozdział jest krótki, ale celowo bezlitosny w prostocie, bo to on tłumaczy resztę gry.",
    status: "demo",
  },
  {
    slug: "zatoka-suszonych-zagli",
    index: 2,
    title: "Zatoka Suszonych Żagli",
    biome: "Opuszczona przystań pełna wraków i naprężonych lin",
    mechanic: "Rytm przypływów",
    summary:
      "Dawny port rybacki, w którym drewniane pomosty i wraki żaglowców wynurzają się z wody tylko na kilka minut na dobę.",
    detail:
      "Zatoka żyje własnym rytmem. Gdy przypływ sięga zenitu, cała okolica znika pod wodą, a jedynym śladem po niej są maszty sterczące z fal. Gdy woda się cofa, otwierają się przejścia między wrakami, ale każde z nich ma inny, ograniczony czas dostępu. Gracz musi zaplanować trasę tak, by zdążyć z jednego pokładu na drugi, zanim przypływ odetnie drogę powrotną. Po drodze odczytuje zapiski dawnych rybaków wyryte na relingach, fragmenty historii osady, która zniknęła nie wiadomo kiedy.",
    status: "w-budowie",
  },
  {
    slug: "bursztynowe-wyrobiska",
    index: 3,
    title: "Bursztynowe Wyrobiska",
    biome: "Podziemne sztolnie, w których światło łamie się w żywicy",
    mechanic: "Bursztynowe soczewki",
    summary:
      "Sieć wykutych w skale korytarzy, gdzie jedynym źródłem światła są bryły bursztynu uwięzione w ścianach.",
    detail:
      "Pod ziemią nie ma wiatru ani przypływów. Jest tylko ciemność i bursztyn. Gracz zbiera i łączy soczewki wycięte z żywicy, by kierować wiązki światła wpadające przez szczeliny w skale, otwierając w ten sposób mechanizmy zablokowanych bram. Każda soczewka inaczej łamie światło: jedna je rozprasza, inna skupia w wąski promień, a trzecia zmienia jego barwę, co ma znaczenie przy czytaniu run wypalonych na starych drzwiach wyrobiska. To najbardziej kontemplacyjny rozdział całej wyprawy.",
    status: "planowany",
  },
  {
    slug: "las-zawieszonych-mostow",
    index: 4,
    title: "Las Zawieszonych Mostów",
    biome: "Korony drzew spięte siecią mostów, platform i wyciągów linowych",
    mechanic: "Szkicownik trasy",
    summary:
      "Prowizoryczna sieć przepraw zbudowana wysoko nad ziemią przez kogoś, kto najwyraźniej bardzo się śpieszył.",
    detail:
      "Konstrukcje w koronach drzew nie mają jednego planu. Powstawały etapami, dobudowywane przez lata, aż utworzyły plątaninę mostów, drabin i platform bez żadnej wyraźnej logiki. Zamiast gotowej mapy gracz otrzymuje pusty szkicownik i musi sam zaznaczać w nim odkryte przejścia, martwe zaułki i skróty. Bez własnych notatek bardzo łatwo się tu zgubić, a niektóre mosty nie wytrzymują powrotu tą samą drogą dwa razy.",
    status: "planowany",
  },
  {
    slug: "latarnia-ostatniego-sygnalu",
    index: 5,
    title: "Latarnia Ostatniego Sygnału",
    biome: "Samotna wieża na skalistym cyplu, migocząca resztkami mocy",
    mechanic: "Dziennik ekspedycji",
    summary:
      "Latarnia wciąż nadaje sygnał, mimo że nikt jej nie obsługuje od bardzo dawna.",
    detail:
      "Im wyżej po spiralnych schodach, tym więcej zapisków, map i luźnych kartek z dziennika ostatniego latarnika. Gracz składa je w spójną całość, próbując zrozumieć, dlaczego latarnia wciąż działa i co dokładnie nadawała ostatniej nocy przed zniknięciem załogi. Mechanika dziennika ekspedycji, wprowadzana subtelnie od pierwszego rozdziału, staje się tu centralnym elementem rozgrywki. To notatki gracza, a nie instrukcje gry, prowadzą do finałowego pomieszczenia latarni.",
    status: "planowany",
  },
  {
    slug: "zatopione-archiwum",
    index: 6,
    title: "Zatopione Archiwum",
    biome: "Zalane komnaty pod dnem zatoki, gdzie kończy się cała podróż",
    mechanic: "Połączenie wszystkich mechanik",
    summary:
      "Finałowy rozdział spina wiatr, przypływy, światło i notatki w jedną, spójną odpowiedź na pytanie, dokąd tak naprawdę prowadziła ta trasa.",
    detail:
      "Ostatni odcinek nie wprowadza nowej mechaniki. Zamiast tego łączy wszystkie poprzednie w serii pomieszczeń, które reagują na wiatr przenikający z góry, resztki przypływu sączące się przez pęknięcia w suficie oraz światło odbite od zebranych wcześniej soczewek. Archiwum kryje odpowiedź na pytanie postawione w pierwszym rozdziale, ale bez kompletu wcześniejszych notatek z dziennika ekspedycji jego pełny sens pozostaje nieuchwytny. Dokładnie tak, jak było to zaplanowane.",
    status: "planowany",
  },
];

export const chapters: Chapter[] = raw.map((c) => chapterSchema.parse(c));
