import Navbar from "../pages/Navbar";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Feel free to reach out to me via email at {''}
        chunarahet@gmail.com. I look forward to
        connecting with you!
      </p>
      <div className={styles.formContainer}>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.formInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.formInput}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className={styles.formTextarea}
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
