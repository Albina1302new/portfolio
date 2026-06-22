import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.hello}>Hi, I’m</p>

        <h1>
          ALBINA <br />
          BIRIUKOVA
        </h1>

        <h2>Frontend Developer</h2>

        <p className={styles.text}>
          Currently looking for an internship to gain real-world experience and
          continue growing.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primary}>
            View Projects
          </a>

          <a href="#contact" className={styles.secondary}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
