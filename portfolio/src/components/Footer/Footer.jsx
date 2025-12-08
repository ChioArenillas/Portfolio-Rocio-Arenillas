import React from 'react'
import styles from "./Footer.module.css";
import github from "../../assets/contact/githubIcon.png";
import figma from "../../assets/contact/figmaIcon.png";


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <p>© 2025 | <a href="https://www.figma.com/design/FR1RaEwYZDjq3avU5jjOEo/Roc%C3%ADo-Arenillas-CV?node-id=0-1">Designed</a> and 
            <a href="https://github.com/ChioArenillas/Portfolio-Rocio-Arenillas.git"> code</a> ❤️️ by Rocio Arenillas </p>
        </div>
    </footer>
  )
}
