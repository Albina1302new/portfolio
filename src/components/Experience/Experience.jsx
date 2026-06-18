import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <span className={styles.label}>Experience</span>

        <h2>Education & Journey</h2>

        <div className={styles.timeline}>
          <article className={styles.item}>
            <span className={styles.year}>2025 — Present</span>

            <div>
              <h3>Media College Viborg</h3>

              <p>
                Web Development student working with design, UI/UX, HTML, CSS,
                JavaScript and React.
              </p>
            </div>
          </article>

          <article className={styles.item}>
            <span className={styles.year}>2025 — Present</span>

            <div>
              <h3>GoIT Ukraine</h3>

              <p>
                Fullstack Developer course focused on modern development
                workflows and GitHub.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
