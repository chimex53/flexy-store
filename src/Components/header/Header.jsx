import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <nav className={styles.nav}>
          <h3>
            flexy <span>store</span>
          </h3>
          <ul className={styles.navList}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
