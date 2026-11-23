import React from "react";
import styles from "./Hero.module.css";
import topPicture from "../../assets/hero/top-picture.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className={styles.hero}>
      <img className={styles.heroimg} src={topPicture} alt="hero" />
      <div className={styles.greyBackground}></div>
      <div className={styles.text}>
        <div className={styles.textLeft}>
          <h2 className={styles.title}>{t.hero.design}</h2>
          <p className={styles.subtitle}>
            {t.hero.designerMain}{" "}
            <span className={styles.subtitleSecond}>
              {t.hero.designerHighlight}
            </span>
          </p>
        </div>

        <div className={styles.textRight}>
          <h2 className={styles.title}>{t.hero.code}</h2>
          <p className={styles.subtitle}>
            {t.hero.developerMain}{" "}
            <span className={styles.subtitleSecond}>
              {t.hero.developerHighlight}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
