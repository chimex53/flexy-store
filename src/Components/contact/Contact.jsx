import { useState } from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  const formValues = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setform] = useState(formValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };
  /* form submission */
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("form submitted", form);
    setform(formValues);
  };
  return (
    <section id="contact">
      <div className={styles.contactContainer}>
        <h2 id={styles.contactHeading}>Contact us</h2>
        <div className={styles.contactForm}>
          <form action="" onSubmit={handleSumbit}>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id=""
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={10}
              cols={10}
            ></textarea>
            <button className={styles.ContactBtn}>send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
