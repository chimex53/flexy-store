import styles from "./Featured.module.css";
import sports1 from "../../assets/images/sports1.jpg";
import sports2 from "../../assets/images/sports2.jpg";
import sports3 from "../../assets/images/sports3.jpg";
import polo1 from "../../assets/images/polo1.jpg";
import polo2 from "../../assets/images/polo2.jpg";
import polo4 from "../../assets/images/polo4.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
import sneaker5 from "../../assets/images/sneaker5.jpg";
const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Featured</h2>
      </div>
      <div className={styles.featuredImages}>
        <img src={sports1} alt="" />
        <img src={sports2} alt="" />
        <img src={sports3} alt="" />
        <img src={polo1} alt="" />
        <img src={polo2} alt="" />
        <img src={polo4} alt="" />
        <img src={sneaker4} alt="" />
        <img src={sneaker5} alt="" />
      </div>
    </div>
  );
};
export default Featured;
