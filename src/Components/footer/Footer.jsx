import styles from "./Footer.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="footerInfo">
        <h3 className={styles.footerHeading}>get in touch</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sequi
          fugiat maxime nostrum ut corporis quod perspiciatis officia iure
          repudiand.
        </p>
        <p>
          <FaPhoneFlip color="orange" size={20} /> : +2340000000
        </p>
        <p>
          <MdOutlineEmail color="orange" size={20} /> : example@gmail.com
        </p>
        <p>
          <IoLocation color="orange" size={20} /> : No. 1 buhari str. kastina
        </p>
        <p className={styles.copyright}>copyright &copy; flexy store 2025</p>
      </div>
    </div>
  );
};
export default Footer;
