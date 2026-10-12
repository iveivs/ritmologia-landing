import type { ReactNode } from "react";
import styles from "./Frame.module.css";

const ratioClass = {
  "4/3": styles.r4x3,
  "4/5": styles.r4x5,
  "3/2": styles.r3x2,
  "5/4": styles.r5x4,
  "9/16": styles.r9x16,
} as const;

type FrameProps = {
  ratio: keyof typeof ratioClass;
  bordered?: boolean;
  /** No corner radius (e.g. inside a device screen that clips it). */
  square?: boolean;
  /** A photo that zooms in slightly on hover (devices with a mouse only). */
  zoom?: boolean;
  children: ReactNode;
};

export function Frame({ ratio, bordered, square, zoom, children }: FrameProps) {
  const classes = [
    styles.frame,
    ratioClass[ratio],
    bordered ? styles.bordered : "",
    square ? styles.square : "",
    zoom ? styles.zoom : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
