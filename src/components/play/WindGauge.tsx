"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WindGauge.module.css";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Phase = "idle" | "moving" | "success" | "fail";

const PERIOD_MS = 1400;

function triangleWave(elapsed: number) {
  const t = (elapsed % (PERIOD_MS * 2)) / PERIOD_MS;
  return t <= 1 ? t : 2 - t;
}

function randomZone() {
  const width = 16 + Math.random() * 8;
  const start = Math.random() * (100 - width);
  return { start, end: start + width };
}

export function WindGauge({ onCleared }: { onCleared: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [attempt, setAttempt] = useState(0);
  // null until the player's first click generates it — the page is
  // statically prerendered, so a Math.random() call during the initial
  // render would bake one value into the built HTML while the client
  // computed a different one during hydration (a hydration mismatch).
  // Deriving it only inside an event handler (startAttempt) keeps every
  // render pure and avoids that entirely.
  const [zone, setZone] = useState<{ start: number; end: number } | null>(null);
  const [markerPct, setMarkerPct] = useState(0);
  const reduced = useReducedMotion();
  const rafRef = useRef(0);
  const startRef = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (phase !== "moving" || reduced || !zone) return;
    startRef.current = performance.now();
    function loop(now: number) {
      const elapsed = now - startRef.current;
      setMarkerPct(triangleWave(elapsed) * 100);
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, reduced, zone]);

  function startAttempt() {
    setZone(randomZone());
    setPhase("moving");
  }

  function catchWind() {
    if (reduced || !zone) {
      setPhase("success");
      return;
    }
    if (markerPct >= zone.start && markerPct <= zone.end) {
      setPhase("success");
    } else {
      setAttempt((a) => a + 1);
      setPhase("fail");
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.track} ref={trackRef} role="img" aria-label="Wskaźnik siły i kierunku podmuchu wiatru">
        {zone && (
          <div
            className={styles.safeZone}
            style={{ left: `${zone.start}%`, width: `${zone.end - zone.start}%` }}
          />
        )}
        {phase === "moving" && !reduced && zone && (
          <div className={styles.marker} style={{ left: `${markerPct}%` }} />
        )}
      </div>

      <div className={styles.controls}>
        {phase === "idle" && (
          <button type="button" onClick={startAttempt}>
            Wyczuj wiatr
          </button>
        )}
        {phase === "moving" && (
          <button type="button" onClick={catchWind}>
            Złap podmuch
          </button>
        )}
        {phase === "fail" && (
          <button type="button" onClick={startAttempt}>
            Spróbuj ponownie
          </button>
        )}
        {phase === "success" && (
          <button type="button" onClick={onCleared}>
            Idź dalej ścieżką
          </button>
        )}
        <span className={styles.hint}>
          {phase === "idle" &&
            "Kliknij, aby zobaczyć, w którym miejscu paska pojawi się moment ciszy między porywami."}
          {phase === "moving" && "Kliknij, gdy znacznik wejdzie w podświetloną strefę."}
          {phase === "fail" &&
            (attempt > 2
              ? "Wiatr bywa nieprzewidywalny — spokojnie, spróbuj jeszcze raz."
              : "Za wcześnie albo za późno. Spróbuj jeszcze raz.")}
          {phase === "success" && "Trafiony moment ciszy — przejście jest bezpieczne."}
        </span>
      </div>
    </div>
  );
}
