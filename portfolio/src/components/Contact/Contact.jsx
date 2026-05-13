import React, { useState } from "react";
import styles from "./Contact.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const {t} = useLanguage()
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formsubmit.co/arenillasr@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setSent(true);
        form.reset();
      })
      .catch(() => alert(t.contact.errorMessage));
  };

  return (
    <section className={`reveal ${styles.container}`} id="Contact">
      <div className={styles.header}>
        <span className={styles.kicker}>{t.contact.kicker}</span>
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.subtitle}>{t.contact.subtitle}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
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

          <p>{t.contact.intro}</p>
        </div>

        <form className={styles.box} onSubmit={handleSubmit}>
          <p className={styles.inputTitle}>{t.contact.nameLabel}</p>
          <input
            className={styles.input}
            placeholder={t.contact.namePlaceholder}
            type="text"
            name="name"
            required
          />

          <p className={styles.inputTitle}>{t.contact.emailLabel}</p>
          <input
            className={styles.input}
            placeholder={t.contact.emailPlaceholder}
            type="email"
            name="email"
            required
          />

          <p className={styles.inputTitle}>{t.contact.messageLabel}</p>
          <textarea
            className={styles.input}
            placeholder={t.contact.messagePlaceholder}
            rows="5"
            name="message"
            required
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" className={styles.btn}>
            {t.contact.submitBtn}
          </button>

          {sent && (
            <p className={styles.successMessage}>
              {t.contact.successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
