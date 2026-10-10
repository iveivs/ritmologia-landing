"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/basePath";
import { Button } from "./Button";
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
      <div className={styles.map}>
        {live ? (
          <iframe
            src={src}
            title="Карта: студия на Васильевском острове"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={withBasePath("/images/map-address.webp")}
              alt={alt}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className={styles.overlay}>
              <Button variant="ink" onClick={() => setLive(true)}>
                Показать карту
              </Button>
            </div>
          </>
        )}
      </div>
      {live ? null : (
        <div className={styles.note}>
          <Meta>Карта загрузится с сервиса Яндекса</Meta>
        </div>
      )}
    </div>
  );
}
