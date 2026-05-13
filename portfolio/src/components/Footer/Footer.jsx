import React from 'react'
import styles from "./Footer.module.css";
import github from "../../assets/contact/githubIcon.png";
import figma from "../../assets/contact/figmaIcon.png";
import { useLanguage } from '../../context/LanguageContext';


export default function Footer() {
  const {t} = useLanguage()
  return (
    <footer className={styles.footer}>
        <div className={styles.content}>
          {t.footer.text}
        </div>
    </footer>
  )
}
