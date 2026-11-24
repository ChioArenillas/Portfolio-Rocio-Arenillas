import { useState, useEffect, useRef } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../../hooks/useLanguage";
import SectionHeader from "../SectionHeader/SectionHeader";

const getCardsPerPage = () => (window.innerWidth < 830 ? 5 : 9);

export const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const nextCardsPerPage = getCardsPerPage();
      setCardsPerPage(nextCardsPerPage);
      setPage((currentPage) => {
        const nextTotalPages = Math.ceil(projects.length / nextCardsPerPage);
        return Math.min(currentPage, nextTotalPages - 1);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const safePage = Math.min(page, totalPages - 1);
  const start = safePage * cardsPerPage;
  const end = start + cardsPerPage;
  const itemsToShow = projects.slice(start, end);

  const scrollToProjects = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextPage = () => {
    setPage((p) => (Math.min(p, totalPages - 1) + 1) % totalPages);
    scrollToProjects();
  };

  const prevPage = () => {
    setPage((p) => (Math.min(p, totalPages - 1) - 1 + totalPages) % totalPages);
    scrollToProjects();
  };

  return (
    <section
      ref={sectionRef}
      className={`reveal ${styles.container}`}
      id="Projects"
    >
      <div className={styles.projectsBackground}>
        <SectionHeader
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          variant="light"
        />

        <div className={styles.projects}>
          {itemsToShow.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} onClick={prevPage}>
            ❮
          </button>

          <span className={styles.pageIndicator}>
            {safePage + 1} / {totalPages}
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
