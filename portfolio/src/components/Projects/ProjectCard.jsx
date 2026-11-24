import githubIcon from "../../assets/contact/githubIcon.png";
import figmaIcon from "../../assets/contact/figmaIcon.png";

import styles from "./ProjectCard.module.css";
import { useLanguage } from "../../hooks/useLanguage";
import { getProjectImage, getSkillIcon } from "../../utils/assets";

export const ProjectCard = ({
  project: { title, imageSrc, description, icons, url, github, figma },
}) => {
  const { language } = useLanguage();

  const cardTitle =
    typeof title === "string"
      ? title
      : title?.[language] || title?.en || "";

  const cardDescription =
    typeof description === "string"
      ? description
      : description?.[language] || description?.en || "";

  return (
    <div className={styles.container}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
      >
        <img
          src={getProjectImage(imageSrc)}
          alt={cardTitle}
          className={styles.image}
        />
      </a>

      <h3 className={styles.titleCard}>{cardTitle}</h3>

      <p className={styles.description}>{cardDescription}</p>

      <ul className={styles.skills}>
        {icons.map((iconFile) => (
          <li key={iconFile}>
            <img
              className={styles.skill}
              src={getSkillIcon(iconFile)}
              alt={iconFile.replace(/\.[^.]+$/, "")}
            />
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="View code on GitHub"
          >
            <img className={styles.icons} src={githubIcon} alt="GitHub" />
          </a>
        )}

        {figma && (
          <a
            href={figma}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="View design on Figma"
          >
            <img className={styles.icons} src={figmaIcon} alt="Figma" />
          </a>
        )}
      </div>
    </div>
  );
};
