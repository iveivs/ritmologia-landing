import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import styles from "./Photo.module.css";

type PhotoProps = {
  /** Path inside public/, e.g. "/images/hero.webp" (base path is added here). */
  src: string;
  alt: string;
  sizes: string;
  fit?: "cover" | "contain" | "scaleDown";
  focus?: "center" | "upper" | "top" | "bottom";
  priority?: boolean;
  className?: string;
};

/** An image that fills its parent (a Frame or any positioned box). */
export function Photo({
  src,
  alt,
  sizes,
  fit = "cover",
  focus = "center",
  priority,
  className,
}: PhotoProps) {
  const classes = [
    styles.photo,
    fit === "contain" ? styles.contain : "",
    fit === "scaleDown" ? styles.scaleDown : "",
    styles[focus],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={classes}
    />
  );
}
