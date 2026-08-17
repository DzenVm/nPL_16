import { galleryItemSchema, type GalleryItem } from "./schema";

const raw: GalleryItem[] = [
  {
    src: "/images/cliffs-dawn.svg",
    alt: "Ilustracja wapiennych klifów o świcie, z wąską ścieżką biegnącą wzdłuż urwiska i mgłą unoszącą się nad morzem",
    caption: "Klify Startowe — pierwsze kroki po wietrznych półkach skalnych",
  },
  {
    src: "/images/compass-map.svg",
    alt: "Ilustracja starego kompasu leżącego na odręcznie rysowanej mapie wybrzeża",
    caption: "Szkicownik trasy — mapa, którą gracz rysuje sam",
  },
  {
    src: "/images/amber-quarry.svg",
    alt: "Ilustracja podziemnej sztolni z bryłami bursztynu w ścianach, przez które przenika światło",
    caption: "Bursztynowe Wyrobiska — korytarze oświetlone żywicą",
  },
  {
    src: "/images/suspended-bridges.svg",
    alt: "Ilustracja sieci drewnianych mostów zawieszonych wysoko w koronach drzew, otulonych mgłą",
    caption: "Las Zawieszonych Mostów — plątanina przepraw bez jednego planu",
  },
  {
    src: "/images/lighthouse-night.svg",
    alt: "Ilustracja samotnej latarni morskiej na skalistym cyplu, emitującej snop światła w nocy",
    caption: "Latarnia Ostatniego Sygnału — wciąż nadaje, mimo że nikt jej nie obsługuje",
  },
  {
    src: "/images/sunken-archive.svg",
    alt: "Ilustracja zatopionych, kamiennych komnat pod dnem zatoki, oświetlonych smugami światła z góry",
    caption: "Zatopione Archiwum — miejsce, w którym kończy się cała wyprawa",
  },
];

export const gallery: GalleryItem[] = raw.map((g) => galleryItemSchema.parse(g));
