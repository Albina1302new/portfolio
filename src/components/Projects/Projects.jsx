import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Projects() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <span className={styles.label}>Projects</span>
        <h2>Education Projects</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className={styles.slider}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <article className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={project.image} alt={project.title} />
                </div>

                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className={styles.tech}>
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>

                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.controls}>
          <button onClick={() => swiperRef.current.slidePrev()}>←</button>

          <div className={styles.counter}>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <button onClick={() => swiperRef.current.slideNext()}>→</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
