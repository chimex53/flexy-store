import styles from "./Home.module.css";
const Home = () => {
  return (
    <section id="home">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h2>
            welcome to <span>flexy store</span>
          </h2>
          <p>We sell high quality foot wears, sport wears, polo etc.</p>
          <a href="#shop">
            <button className={styles.homeBtn}>shop now</button>
          </a>
          <div className={styles.ctaImages}></div>
        </div>
      </div>
    </section>
  );
};
export default Home;
