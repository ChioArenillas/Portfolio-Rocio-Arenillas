import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [cardsPerPage, setCardsPerPage] = useState(6); // valor por defecto

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 830) {
        setCardsPerPage(3); // 👉 en móvil solo 3 tarjetas
      } else {
        setCardsPerPage(6); // 👉 escritorio: 3 por fila * 2 filas
      }
    };

    handleResize(); // ejecutar al cargar
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
    <section className={styles.container} id="projects">
      <div className={styles.titleBackground}>
        <h2 className={styles.title}>Projects</h2>
      </div>

      <div className={styles.projectsBackground}>
        <div className={styles.projects}>
          {itemsToShow.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} onClick={prevPage}>❮</button>

          <span className={styles.pageIndicator}>
            {page + 1} / {totalPages}
          </span>

          <button className={styles.arrow} onClick={nextPage}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
