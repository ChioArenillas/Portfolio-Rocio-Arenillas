import React from "react";
import styles from "./About.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import about from "../../assets/about/aboutImg.jpg";

export default function About() {
  return (
    <section className={`reveal ${styles.container}`} id="About">
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.kicker}>About</span>
          <h1 className={styles.title}>&lt; Holaa! I’m Chio, 👋 /&gt;</h1>
          <p className={styles.subtitle}>
            A little bit about who I am, what I do, and what I enjoy building
          </p>
        </div>
        <div>
          <p className={styles.description}>
            <span className={styles.colorText}>&lt;p&gt;</span> I’m a
            <span className={styles.colorText}> Web Designer </span>&{" "}
            <span className={styles.colorText}>
              {" "}
              Frontend Developer and UI-focused designer{" "}
            </span>
            based in Madrid, specialized in building responsive and
            user-centered web applications using React and TypeScript. I enjoy
            transforming ideas into functional and visually clean digital
            products with a strong focus on usability and user experience.
            <span className={styles.colorText}> &lt;/p&gt;</span>{" "}
          </p>
          <p className={styles.description}>
            <span className={styles.colorText}>&lt;p&gt;</span> Coming from a
            background in
            <span className={styles.colorText}> Psychology </span> and
            <span className={styles.colorText}> Art Therapy, </span>
            as well as experience in team coordination and people management, I
            bring a human-centered perspective to design and development. This
            helps me better understand user behaviour, improve interface
            decisions, and work effectively in collaborative environments.
            <span className={styles.colorText}> &lt;/p&gt; </span>{" "}
          </p>
        </div>
        <div className={styles.btnsection}>
          <div className={styles.cv}>
            <div className={styles.btn}>
              <a
                className={styles.download}
                href="/cv/CV-Rocio-Arenillas-ENG.pdf"
                target="_blank"
              >
                Download CV
              </a>
            </div>
            <div className={styles.btn}>
              <a
                className={styles.download}
                href="/cv/Cover-Letter-Rocio-Arenillas-ENG.pdf"
                target="_blank"
              >
                Cover Letter
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
