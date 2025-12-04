import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils.js";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/">Rocio Arenillas</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li href="#about">About</li>
            <li href="#about">Skills & Tools</li>
            <li href="#about">Projects</li>
            <li href="#about">Contact</li>
        </ul>
      </div>
      </div>
    </nav>
  )
}
