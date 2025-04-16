import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2>
          welcome to <span>flexy store</span>
        </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className={styles.homeBtn}>shop now</button>
      </div>
    </div>
  );
};
export default Home;
