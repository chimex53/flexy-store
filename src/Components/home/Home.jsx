import styles from "./Home.module.css";
import cta2 from "../../assets/images/cta2.jpg";
import cta1 from "../../assets/images/cta1.jpg";
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
          <div className={styles.ctaImages}>
            <img className={styles.cta} src={cta2} alt="" height={50} />
            <img className={styles.cta} src={cta1} alt="" height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
