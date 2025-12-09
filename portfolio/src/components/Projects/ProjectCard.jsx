import React from "react";
import githubIcon from "../../assets/contact/githubIcon.png";
import figmaIcon from "../../assets/contact/figmaIcon.png";

import styles from "./ProjectCard.module.css";

const images = import.meta.glob("/src/assets/projects/*", {
  eager: true,
  import: "default",
});

const skillsIcons = import.meta.glob("/src/assets/skills/*", {
  eager: true,
  import: "default",
});

export const ProjectCard = ({
  project: { title, imageSrc, description, icons, url, github, figma },
}) => {
  
  const getImage = (file) => {
    const baseName = file.split(".")[0];

    const entry = Object.entries(images).find(([path]) =>
      path.includes(baseName)
    );

    return entry?.[1];
  };

  const getSkillsIcon = (file) => {
    const baseName = file.split(".")[0];

    const entry = Object.entries(skillsIcons).find(([path]) =>
      path.includes(baseName)
    );

    return entry?.[1];
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={styles.container}>
        
        <img
          src={getImage(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {icons.map((iconFile, id) => (
            <li key={id} className={styles.list}>
              <img
                className={styles.skill}
                src={getSkillsIcon(iconFile)}
                alt={iconFile}
              />
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {figma ? (
            <a
              className={styles.list}
              href={figma}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.icons} src={figmaIcon} alt="figma icon" />
            </a>
          ) : (
            <a
              className={styles.list}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.icons} src={githubIcon} alt="github icon" />
            </a>
          )}
        </div>
      </div>
    </a>
  );
};
