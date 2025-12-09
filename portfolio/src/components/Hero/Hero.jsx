import React from 'react';
import styles from "./Hero.module.css";
import topPicture from "../../assets/hero/top-picture.jpg";

export default function Hero() {
  return (
    <div className={styles.hero} >
      <img className={styles.heroimg} src={topPicture} alt="hero" />
      <div className={styles.greyBackground}></div>
      <div className={styles.text}>
        <div className={styles.textLeft}>
          <h2 className={styles.title}>DESIGN</h2>
          <p className={styles.subtitle}>
            UX UI <span className={styles.subtitleSecond}>Designer</span>
          </p>
        </div>

        <div className={styles.textRight}>
          <h2 className={styles.title}>&lt;CODE/&gt;</h2>
          <p className={styles.subtitle}>
            Frontend <span className={styles.subtitleSecond}>Developer</span>
          </p>
        </div>
      </div>
    </div>
  )
}
