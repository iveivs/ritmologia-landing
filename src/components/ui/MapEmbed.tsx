"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { DrumLoader } from "./DrumLoader";
import { Frame } from "./Frame";
import { Photo } from "./Photo";
import { Meta } from "./Typography";
import styles from "./MapEmbed.module.css";

type MapEmbedProps = {
  /** Yandex map-widget URL, loaded only after the visitor asks for it. */
  src: string;
  alt: string;
};

/** A static picture first; the live Yandex map (and its scripts and cookies)
 *  is requested only after a click, so the page loads nothing third-party. */
export function MapEmbed({ src, alt }: MapEmbedProps) {
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

  // If the map has not shown up after a while (blocked, offline), say so.
  useEffect(() => {
    if (!live || loaded) return;
    const timer = window.setTimeout(() => setSlow(true), 12000);
    return () => window.clearTimeout(timer);
  }, [live, loaded]);

  return (
    <div>
      <Frame ratio="5/4" bordered>
        <Photo
          src="/images/map-address.webp"
          alt={alt}
          sizes="(max-width: 900px) 100vw, 55vw"
        />
        {live ? (
          <iframe
            className={`${styles.iframe} ${loaded ? styles.loaded : ""}`}
            src={src}
            title="Карта: студия на Васильевском острове"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <div className={styles.overlay}>
            <Button variant="dark" onClick={() => setLive(true)}>
              Показать карту
            </Button>
          </div>
        )}
        {live && !loaded ? (
          <div className={styles.overlay}>
            <DrumLoader
              label={
                slow
                  ? "Карта не открылась. Попробуйте «Открыть в Яндекс Картах»"
                  : "Загружаем карту…"
              }
            />
          </div>
        ) : null}
      </Frame>
      {live ? null : (
        <div className={styles.note}>
          <Meta>Карта загрузится с сервиса Яндекса</Meta>
        </div>
      )}
    </div>
  );
}
