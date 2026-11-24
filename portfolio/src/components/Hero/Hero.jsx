import styles from "./Hero.module.css";
import topPicture from "../../assets/hero/top-picture.jpg";
import { useLanguage } from "../../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className={styles.hero}>
      <img
        className={styles.heroimg}
        src={topPicture}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />
      <div className={styles.greyBackground} aria-hidden="true"></div>
      <div className={styles.text}>
        <div className={styles.textLeft}>
          <p className={styles.title}>{t.hero.design}</p>
          <p className={styles.subtitle}>
            {t.hero.designerMain}{" "}
            <span className={styles.subtitleSecond}>
              {t.hero.designerHighlight}
            </span>
          </p>
        </div>

        <div className={styles.textRight}>
          <p className={styles.title}>{t.hero.code}</p>
          <p className={styles.subtitle}>
            {t.hero.developerMain}{" "}
            <span className={styles.subtitleSecond}>
              {t.hero.developerHighlight}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
