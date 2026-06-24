import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <img
              src="/portfolio/images/logoAlbina.png"
              alt="Albina Biriukova Logo"
              className={styles.logoImg}
            />

            <div className={styles.logoInfo}>
              <span className={styles.logoName}>Albina Biriukova</span>
              <span className={styles.logoRole}>Frontend Developer</span>
            </div>
          </a>

          <div className={styles.desktopMenu}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className={styles.burgerBtn}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={closeMenu}
      ></div>

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <img
              src="/portfolio/images/logoAlbina.png"
              alt="Albina Biriukova Logo"
              className={styles.logoImg}
            />

            <div className={styles.logoInfo}>
              <span className={styles.logoName}>Albina Biriukova</span>
              <span className={styles.logoRole}>Frontend Developer</span>
            </div>
          </a>

          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className={styles.mobileMenu}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className={styles.sidebarCard}>
          <p>Let’s create  together.</p>
          <a href="#contact" onClick={closeMenu}>
            Get in Touch
          </a>
        </div>
      </aside>
    </>
  );
}

export default Header;
