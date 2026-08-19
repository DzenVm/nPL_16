"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

type Consent = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-changed";

function writeConsent(consent: Consent) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function hasStoredConsent() {
  return window.localStorage.getItem(STORAGE_KEY) !== null;
}

function getServerHasConsent() {
  return true;
}

export function CookieConsent() {
  const hasConsent = useSyncExternalStore(subscribeToConsent, hasStoredConsent, getServerHasConsent);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  if (hasConsent) return null;

  function decide(consent: Omit<Consent, "decidedAt">) {
    writeConsent({ ...consent, decidedAt: new Date().toISOString() });
  }

  return (
    <div className={styles.wrap} role="dialog" aria-live="polite" aria-label="Zgoda na pliki cookie">
      <div className={styles.panel}>
        <p className={styles.text}>
          Ten serwis używa plików cookie niezbędnych do jego działania oraz, wyłącznie za Twoją
          zgodą, plików analitycznych i reklamowych (w tym związanych z Google Ads). Szczegóły
          znajdziesz w{" "}
          <Link href="/cookies">polityce plików cookie</Link> i{" "}
          <Link href="/polityka-prywatnosci">polityce prywatności</Link>.
        </p>

        {expanded && (
          <div className={styles.options}>
            <label className={styles.option}>
              <input type="checkbox" checked disabled />
              <span>
                <strong>Niezbędne</strong>
                <span className="small">
                  Wymagane do podstawowego działania serwisu (np. zapamiętanie Twojego wyboru). Zawsze aktywne.
                </span>
              </span>
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>
                <strong>Analityczne</strong>
                <span className="small">Pomagają zrozumieć, jak korzystasz z serwisu, żeby móc go poprawiać.</span>
              </span>
            </label>
            <label className={styles.option}>
              <input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} />
              <span>
                <strong>Reklamowe</strong>
                <span className="small">Wykorzystywane do pomiaru skuteczności kampanii, w tym Google Ads.</span>
              </span>
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => decide({ necessary: true, analytics: true, ads: true })}
          >
            Akceptuj wszystkie
          </button>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={() => decide({ necessary: true, analytics: false, ads: false })}
          >
            Tylko niezbędne
          </button>
          {expanded ? (
            <button
              type="button"
              className={styles.btnGhost}
              onClick={() => decide({ necessary: true, analytics, ads })}
            >
              Zapisz wybór
            </button>
          ) : (
            <button type="button" className={styles.btnLink} onClick={() => setExpanded(true)}>
              Dostosuj ustawienia
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
