import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiSass, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "SCSS", icon: <SiSass /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <FaFigma /> },
];

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <span className={styles.label}>My Skills</span>
        <h2>Technologies I work with</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div className={styles.card} key={skill.name}>
              <div className={styles.icon}>{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
