import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#projects" className={styles.navLink}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#blog" className={styles.navLink}>
            Blog
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
