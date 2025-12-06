import React from "react";
import githubIcon from "../../assets/contact/githubIcon.png"
import urlIcon from "../../assets/contact/urlIcon.png"

import styles from "./ProjectCard.module.css";
const images = import.meta.glob("/src/assets/projects/*", { eager: true });
const skillsIcons = import.meta.glob("/src/assets/skills/*", { eager: true });

export const ProjectCard = ({
  project: { title, imageSrc, description, icons, url, github },
}) => { 
    const getImage = (file) => {
    const entry = Object.values(images).find(img => img.default.includes(file));
    return entry?.default;
  };
    const getSkillsIcon = (file) => {
    const entry = Object.values(skillsIcons).find(img => img.default.includes(file));
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
        {icons.map((iconFile, id) => {
          return (
            <li key={id} className={styles.list}>
              <img className={styles.skill} src={getSkillsIcon(iconFile)} alt={iconFile} />
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.list} href={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.icons} src={urlIcon} alt="github" />      
        </a>
        <a className={styles.list} href={github} target="_blank" rel="noopener noreferrer">
        <img className={styles.icons} src={githubIcon} alt="github" />      
        </a>
      </div>
    </div>
  );
};