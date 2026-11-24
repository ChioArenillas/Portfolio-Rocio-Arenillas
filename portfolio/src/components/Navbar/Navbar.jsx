import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";
import { useLanguage } from "../../hooks/useLanguage";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className={styles.navbarBg} aria-label={t.nav.ariaLabel}>
      <div className={styles.navbar}>
        <a className={styles.title} href="/">
          &lt;Rocio Arenillas/&gt;
        </a>

        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <img
              className={styles.menuIcon}
              src={menuOpen ? closeIcon : menuIcon}
              alt=""
              aria-hidden="true"
            />
          </button>

          <ul
            id="primary-navigation"
            className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#About">{t.nav.about}</a>
            </li>
            <li>
              <a href="#Skills">{t.nav.skills}</a>
            </li>
            <li>
              <a href="#Projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#Contact">{t.nav.contact}</a>
            </li>
          </ul>
          <button
            type="button"
            className={styles.langBtn}
            onClick={toggleLanguage}
            title={t.nav.switchLanguage}
            aria-label={t.nav.switchLanguage}
          >
            {language === "en" ? (
              // Bandera España SVG
              <svg
                width="24"
                height="24"
                viewBox="0 0 640 480"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="640" height="480" fill="#AA151B"/>
                <rect y="120" width="640" height="240" fill="#F1BF00"/>
              </svg>
            ) : (
              // Bandera UK SVG
              <svg
                width="24"
                height="24"
                viewBox="0 0 640 480"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="640" height="480" fill="#012169"/>
                <path d="M0 0 L640 480 M640 0 L0 480" stroke="#FFFFFF" strokeWidth="80"/>
                <path d="M0 0 L640 480 M640 0 L0 480" stroke="#C8102E" strokeWidth="50" transform="translate(0, -10)"/>
                <rect x="270" y="0" width="100" height="480" fill="#FFFFFF"/>
                <rect x="0" y="190" width="640" height="100" fill="#FFFFFF"/>
                <rect x="290" y="0" width="60" height="480" fill="#C8102E"/>
                <rect x="0" y="210" width="640" height="60" fill="#C8102E"/>
              </svg>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}
