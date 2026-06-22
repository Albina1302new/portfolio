import styles from "./About.module.css";
import { FiMapPin, FiMail, FiDownload } from "react-icons/fi";

function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>About Me</span>

          <h2>Creating modern websites with creativity and purpose.</h2>
        </div>

        <div className={styles.content}>
          <p>
            I’m a Web Development student living in Denmark with a strong
            interest in frontend development and digital design.
          </p>
          <p>
            I enjoy turning ideas into modern web experiences through clean
            code, responsive design and attention to detail.
          </p>

          <div className={styles.cvButtons}>
            <a
              href={`${base}docs/AlbinaBiriukova-CV.pdf`}
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
