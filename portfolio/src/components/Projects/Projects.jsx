import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../context/LanguageContext";

export const Projects = () => {
  const {t} = useLanguage()
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 830) {
        setCardsPerPage(5);
      } else {
        setCardsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [page, setPage] = useState(0);

  const start = page * cardsPerPage;
  const end = start + cardsPerPage;
  const itemsToShow = projects.slice(start, end);

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const nextPage = () => {
    setPage((p) => (p + 1) % totalPages);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const prevPage = () => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={`reveal ${styles.container}`} id="Projects">
      <div className={styles.projectsBackground}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t.projects.kicker}</span>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <p className={styles.subtitle}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className={styles.projects}>
          {itemsToShow.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} onClick={prevPage}>
            ❮
          </button>

          <span className={styles.pageIndicator}>
            {page + 1} / {totalPages}
          </span>

          <button className={styles.arrow} onClick={nextPage}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
