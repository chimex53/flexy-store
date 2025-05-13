import styles from "./Home.module.css";
const Home = () => {
  return (
    <section id="home">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h2>
            welcome to <span>flexy store</span>
          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#shop">
            <button className={styles.homeBtn}>shop now</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
