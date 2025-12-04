import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Rocio Arenillas</a>
      <div className={styles.menu}>
        <ul className={styles.menuItem}>
            <li href="#about">About</li>
            <li href="#about">Skills & Tools</li>
            <li href="#about">Projects</li>
            <li href="#about">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
