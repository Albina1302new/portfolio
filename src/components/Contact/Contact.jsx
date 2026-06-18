import styles from "./Contact.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <footer className={styles.contact} id="contact">
      <div className={styles.container}>
        <span className={styles.label}>Contact</span>

        <h2>Let’s build together.</h2>

        <p className={styles.text}>
          I’m open to internship opportunities, junior frontend roles and
          creative collaborations.
        </p>

        <a href="mailto:alja.birjukova@gmail.com" className={styles.ctaBtn}>
          Get in Touch
        </a>

        <div className={styles.socials}>
          <a href="mailto:alja.birjukova@gmail.com">
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
          <p>© 2026 Albina Biriukova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
