
import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/proyects.json";
import { ProjectCard } from "./ProyectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
    <div className={styles.titleBackground}>
      <h2 className={styles.title}>Projects</h2>
    </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;