import React from "react";
import styles from "./About.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import about from "../../assets/about/aboutImg.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const {t} = useLanguage()

  return (
    <section className={`reveal ${styles.container}`} id="About">
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t.about.kicker}</span>
          <h1 className={styles.title}>{t.about.title}</h1>
          <p className={styles.subtitle}>{t.about.subtitle}</p>
        </div>
        <div>
          {t.about.description(styles)}
        </div>
        <div className={styles.btnsection}>
          <div className={styles.cv}>
            <div className={styles.btn}>
              <a
                className={styles.download}
                href={t.about.cvLink}
                target="_blank"
              >
                {t.about.downloadCV}
              </a>
            </div>
            <div className={styles.btn}>
              <a
                className={styles.download}
                href={t.about.coverLetterLink}
                target="_blank"
              >
                {t.about.coverLetter}
              </a>
            </div>
          </div>
          <div className={styles.socials}>
            <a
              href="https://github.com/ChioArenillas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.social} src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/roc%C3%ADo-arenillas-627813279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.social} src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
