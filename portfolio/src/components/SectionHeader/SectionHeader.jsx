import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  as = "h2",
  variant = "default",
}) {
  const Heading = as;
  const isLight = variant === "light";

  return (
    <div className={styles.header}>
      <span
        className={`${styles.kicker} ${isLight ? styles.lightText : ""}`}
      >
        {kicker}
      </span>
      <Heading
        className={`${styles.title} ${isLight ? styles.lightText : ""}`}
      >
        {title}
      </Heading>
      <p className={`${styles.subtitle} ${isLight ? styles.lightText : ""}`}>
        {subtitle}
      </p>
    </div>
  );
}
