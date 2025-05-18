import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <header>
        <nav className={styles.nav} aria-label="Main navigation">
          <h3 className={styles.logo}>flexy store</h3>

          {/* Hamburger icon */}
          <div
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`} />
          </div>

          {/* Navigation links */}
          <ul
            className={`${styles.navList} ${
              menuOpen ? styles.navListOpen : ""
            }`}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop Now</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/checkout">Check Out</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
