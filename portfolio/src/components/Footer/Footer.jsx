import styles from "./Footer.module.css";
import { useLanguage } from "../../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>{t.footer.text}</div>
    </footer>
  );
}
