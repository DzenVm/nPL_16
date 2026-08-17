"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./PlayDemo.module.css";
import { WindGauge } from "./WindGauge";
import { WindParticles } from "./WindParticles";

type SceneId = "intro" | "gate1" | "choice1" | "path-ledge" | "path-creek" | "convergence" | "epilogue";

const SCENE_ORDER: SceneId[] = ["intro", "gate1", "choice1", "path-ledge", "convergence", "epilogue"];

export function PlayDemo() {
  const [scene, setScene] = useState<SceneId>("intro");
  const [path, setPath] = useState<"ledge" | "creek" | null>(null);

  const progressIndex = SCENE_ORDER.indexOf(
    scene === "path-creek" ? "path-ledge" : scene
  );

  return (
    <div className={styles.stage}>
      <WindParticles />
      <div className={styles.progress} aria-hidden="true">
        {SCENE_ORDER.map((s, i) => (
          <span
            key={s}
            className={`${styles.progressDot} ${i <= progressIndex ? styles.progressDotDone : ""}`}
          />
        ))}
      </div>

      <div className={styles.body}>
        {scene === "intro" && (
          <>
            <p className={styles.sceneLabel}>Rozdział 1 — Klify Startowe</p>
            <p className={styles.sceneText}>
              Ścieżka zaczyna się tam, gdzie kończy się droga dojazdowa — na krawędzi wapiennego
              urwiska, nad którym wiatr zmienia kierunek co kilkanaście sekund. W dole, niewidoczne
              stąd fale rozbijają się o skały. Przed Tobą wąska, wietrzna półka skalna.
            </p>
            <p className={styles.sceneText}>
              To skrócony, w pełni grywalny fragment pierwszego rozdziału — bez instalacji,
              bez konta, bez limitu czasu.
            </p>
            <div className={styles.choices}>
              <button type="button" className={styles.choiceBtn} onClick={() => setScene("gate1")}>
                Rusz na szlak →
              </button>
            </div>
          </>
        )}

        {scene === "gate1" && (
          <>
            <p className={styles.sceneLabel}>Przejście przez wietrzną półkę</p>
            <p className={styles.sceneText}>
              Podmuchy uderzają w nierównym rytmie. Musisz wyczuć moment ciszy między nimi, zanim
              zrobisz krok na najwęższym odcinku półki.
            </p>
            <WindGauge onCleared={() => setScene("choice1")} />
          </>
        )}

        {scene === "choice1" && (
          <>
            <p className={styles.sceneLabel}>Rozwidlenie szlaku</p>
            <p className={styles.sceneText}>
              Po przejściu przez wietrzną półkę szlak się rozdziela. Po lewej — wąski karnisz
              biegnący tuż nad urwiskiem, wyraźnie krótszy. Po prawej — wyschnięte koryto dawnego
              potoku, dłuższe, ale osłonięte od wiatru.
            </p>
            <div className={styles.choices}>
              <button
                type="button"
                className={styles.choiceBtn}
                onClick={() => {
                  setPath("ledge");
                  setScene("path-ledge");
                }}
              >
                Idź wąskim karniszem nad urwiskiem
              </button>
              <button
                type="button"
                className={styles.choiceBtn}
                onClick={() => {
                  setPath("creek");
                  setScene("path-creek");
                }}
              >
                Idź wyschniętym korytem potoku
              </button>
            </div>
          </>
        )}

        {(scene === "path-ledge" || scene === "path-creek") && (
          <>
            <p className={styles.sceneLabel}>
              {path === "ledge" ? "Karnisz nad urwiskiem" : "Wyschnięte koryto potoku"}
            </p>
            {path === "ledge" ? (
              <p className={styles.sceneText}>
                Kamień pod stopami jest gładki i śliski od nocnej mgły. W szczelinie skalnej,
                osłoniętej od wiatru, ktoś zostawił zwitek natłuszczonego płótna — w środku kawałek
                pergaminu z fragmentem rysunku wybrzeża.
              </p>
            ) : (
              <p className={styles.sceneText}>
                Dno dawnego potoku jest twarde i spękane od słońca. Między kamieniami tkwi
                zardzewiały hak cumowniczy, a obok niego, w szczelinie, złożona we czworo kartka
                z odręcznymi notatkami o rytmie przypływów.
              </p>
            )}
            <div className={styles.journal}>
              {path === "ledge"
                ? "Zapisek do dziennika: „Karnisz węższy niż pamiętam. Ale krótszy — a to się tu liczy, gdy chmury zbierają się od zachodu.”"
                : "Zapisek do dziennika: „Koryto suche tylko wtedy, gdy przypływ jest niski. Trzeba to zapamiętać na powrót.”"}
            </div>
            <div className={styles.choices}>
              <button type="button" className={styles.choiceBtn} onClick={() => setScene("convergence")}>
                Idź dalej →
              </button>
            </div>
          </>
        )}

        {scene === "convergence" && (
          <>
            <p className={styles.sceneLabel}>Punkt widokowy</p>
            <p className={styles.sceneText}>
              Obie ścieżki schodzą się przy tym samym punkcie widokowym — niewielkim skalnym
              tarasie, z którego widać całą resztę wybrzeża: zatokę w oddali, ciemną plamę lasu na
              horyzoncie i błysk czegoś, co może być latarnią.
            </p>
            <p className={styles.sceneText}>
              Masz już pierwszy fragment do dziennika ekspedycji. Reszta rozdziału — łącznie z
              dalszą częścią zatoki — jest wciąż w budowie.
            </p>
            <div className={styles.choices}>
              <button type="button" className={styles.choiceBtn} onClick={() => setScene("epilogue")}>
                Zakończ ten fragment wyprawy
              </button>
            </div>
          </>
        )}

        {scene === "epilogue" && (
          <>
            <p className={styles.sceneLabel}>Koniec fragmentu demonstracyjnego</p>
            <p className={styles.sceneText}>
              To był skrócony wycinek pierwszego rozdziału — w pełnej wersji „Klify Startowe”
              trwają znacznie dłużej i prowadzą aż do brzegu zatoki. Kolejne rozdziały opisane na
              stronie głównej są obecnie w budowie lub w fazie planowania.
            </p>
            <p className={styles.sceneText}>
              Dziękujemy za wypróbowanie tego fragmentu. Jeśli coś nie zadziałało tak, jak
              powinno, chętnie się o tym dowiemy.
            </p>
            <div className={styles.epilogueActions}>
              <button
                type="button"
                className={styles.choiceBtn}
                onClick={() => {
                  setPath(null);
                  setScene("intro");
                }}
              >
                Zagraj jeszcze raz
              </button>
              <Link href="/#rozdzialy" className={styles.choiceBtn} style={{ textDecoration: "none", display: "inline-block" }}>
                Zobacz pozostałe rozdziały
              </Link>
              <Link href="/kontakt" className={styles.choiceBtn} style={{ textDecoration: "none", display: "inline-block" }}>
                Zgłoś uwagę
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
