import styles from "./Contact.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <footer className={styles.contact} id="contact">
      <div className={styles.container}>
        <span className={styles.label}>Contact</span>

        <h2>Looking for an internship</h2>

        <p className={styles.text}>
          Currently looking for an internship in frontend or web development,
          where I can learn, grow and gain real-world experience.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=alja.birjukova@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
        >
          Get in Touch
        </a>

        <div className={styles.socials}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alja.birjukova@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail />
          </a>

          <a
            href="https://github.com/Albina1302new"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/albina-biriukova-4225b4415/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>AB</div>
          <p>© 2026 Albina Biriukova. Frontend Developer · Denmark</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
