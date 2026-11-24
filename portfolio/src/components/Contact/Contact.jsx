import { useState } from "react";
import styles from "./Contact.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import { useLanguage } from "../../hooks/useLanguage";
import { PROFILE_LINKS } from "../../data/profile";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.target;
    setStatus("submitting");

    try {
      const response = await fetch(PROFILE_LINKS.contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={`reveal ${styles.container}`} id="Contact">
      <SectionHeader
        kicker={t.contact.kicker}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.socials}>
            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                className={styles.social}
                src={github}
                alt=""
                aria-hidden="true"
              />
            </a>
            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                className={styles.social}
                src={linkedin}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>

          <div>{t.contact.intro}</div>
        </div>

        <form className={styles.box} onSubmit={handleSubmit}>
          <label htmlFor="contact-name" className={styles.inputTitle}>
            {t.contact.nameLabel}
          </label>
          <input
            id="contact-name"
            className={styles.input}
            placeholder={t.contact.namePlaceholder}
            type="text"
            name="name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email" className={styles.inputTitle}>
            {t.contact.emailLabel}
          </label>
          <input
            id="contact-email"
            className={styles.input}
            placeholder={t.contact.emailPlaceholder}
            type="email"
            name="email"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message" className={styles.inputTitle}>
            {t.contact.messageLabel}
          </label>
          <textarea
            id="contact-message"
            className={styles.input}
            placeholder={t.contact.messagePlaceholder}
            rows="5"
            name="message"
            required
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="btn"
            disabled={status === "submitting"}
          >
            {status === "submitting"
              ? t.contact.sendingBtn
              : t.contact.submitBtn}
          </button>

          <div aria-live="polite">
            {status === "success" && (
              <p className={styles.successMessage} role="status">
                {t.contact.successMessage}
              </p>
            )}

            {status === "error" && (
              <p className={styles.errorMessage} role="alert">
                {t.contact.errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
