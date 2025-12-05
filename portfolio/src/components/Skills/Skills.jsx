import React from 'react'
import styles from "./Skills.module.css";
import skills from "/src/data/skills.json"

const images = import.meta.glob("/src/assets/skills/*", { eager: true });

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.titleBackground}>
        <h1 className={styles.title}>SKILLS & TOOLS</h1>
      </div>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const entry = Object.values(images).find(img =>
              img.default.includes(skill.imageSrc)
            );
            const img = entry?.default;
            return (
              <div key={id} className={styles.skill}>
                <div><img className={styles.logo} src={img} alt={skill.title} /></div>
                <div><p>{skill.title}</p></div>
              </div>
            );
          })}
        </div>
    </section>
  )
}
