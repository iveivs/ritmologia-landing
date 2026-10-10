"use client";

import { useState } from "react";
import { Button } from "./Button";
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

  return (
    <div>
      <Frame ratio="5/4" bordered>
        {live ? (
          <iframe
            className={styles.iframe}
            src={src}
            title="Карта: студия на Васильевском острове"
            allowFullScreen
          />
        ) : (
          <>
            <Photo
              src="/images/map-address.webp"
              alt={alt}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className={styles.overlay}>
              <Button variant="dark" onClick={() => setLive(true)}>
                Показать карту
              </Button>
            </div>
          </>
        )}
      </Frame>
      {live ? null : (
        <div className={styles.note}>
          <Meta>Карта загрузится с сервиса Яндекса</Meta>
        </div>
      )}
    </div>
  );
}
