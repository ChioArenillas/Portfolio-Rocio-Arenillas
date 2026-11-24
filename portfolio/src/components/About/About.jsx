import styles from "./About.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import { useLanguage } from "../../hooks/useLanguage";
import { PROFILE_LINKS } from "../../data/profile";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={`reveal ${styles.container}`} id="About">
      <div className={styles.content}>
        <SectionHeader
          as="h1"
          kicker={t.about.kicker}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />
        <div>{t.about.description(styles)}</div>
        <div className={styles.btnsection}>
          <div className={styles.cv}>
            <a
              className={`btn download ${styles.downloadBtn}`}
              href={t.about.cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.about.downloadCV}
            </a>
            <a
              className={`btn download ${styles.downloadBtn}`}
              href={t.about.coverLetterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.about.coverLetter}
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img className={styles.social} src={github} alt="" aria-hidden="true" />
            </a>
            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img className={styles.social} src={linkedin} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
