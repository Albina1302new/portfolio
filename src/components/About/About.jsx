import styles from "./About.module.css";
import { FiMapPin, FiMail, FiDownload } from "react-icons/fi";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>About Me</span>

          <h2>
            Passionate about creating beautiful and functional web experiences.
          </h2>
        </div>

        <div className={styles.content}>
          <p>
            I have lived in Denmark for 4 years and have been studying web
            development, focusing on combining creativity with technical
            knowledge.
          </p>

          <p>
            I am goal-oriented, responsible and detail-focused. I enjoy creating
            clean, responsive and user-friendly websites.
          </p>

          <div className={styles.cvButtons}>
           

            <a
              href="/public/docs/Albina-Biriukova-CV-Resume-DK.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.cvSecondary}
            >
              CV (DK)
            </a>
          </div>
        </div>

        <div className={styles.info}>
          <div>
            <FiMail />
            <span>alja.birjukova@gmail.com</span>
          </div>

          <div>
            <FiMapPin />
            <span>Brædstrup, Denmark</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
