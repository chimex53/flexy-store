import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <nav className={styles.nav}>
          <h3>flexy store</h3>
          <ul className={styles.navList}>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop Now</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Check out </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
