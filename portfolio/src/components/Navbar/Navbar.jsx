import React, {useState} from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/">&lt;Rocio Arenillas/&gt;</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
            ? closeIcon
            : menuIcon
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li> <a href="#About">About</a></li>
            <li> <a href="#Skills">Skills & Tools</a></li>
            <li> <a href="#Projects">Projects</a></li>
            <li> <a href="#Contact">Contact</a></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
