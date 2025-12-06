import React from "react";

import styles from "./ProjectCard.module.css";
const images = import.meta.glob("/src/assets/projects/*", { eager: true });


export const ProjectCard = ({
  project: { title, imageSrc, description, skills, url, github },
}) => { 
    const getImage = (file) => {
    const entry = Object.values(images).find(img => img.default.includes(file));
    return entry?.default;
  };

  return (
    <div className={styles.container}>
      <img
        src={getImage(imageSrc)} 
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={url} className={styles.link}>
          Url
        </a>
        <a href={github} className={styles.link}>
         github
        </a>
      </div>
    </div>
  );
};