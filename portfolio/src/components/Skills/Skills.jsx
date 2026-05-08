import React, { useRef, useEffect } from "react";
import styles from "./Skills.module.css";
import skills from "/src/data/skills.json";

const images = import.meta.glob("/src/assets/skills/*", {
  eager: true,
  import: "default",
});

export default function Skills() {
  const getImage = (file) => {
    const baseName = file.split(".")[0]; 

    const entry = Object.entries(images).find(([path]) =>
      path.includes(baseName)
    );

    return entry?.[1]; 
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX || e.touches?.[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches?.[0].pageX;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    const end = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    slider.addEventListener("mousedown", start);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);

    slider.addEventListener("touchstart", start);
    slider.addEventListener("touchmove", move);
    slider.addEventListener("touchend", end);

    return () => {
      slider.removeEventListener("mousedown", start);
      slider.removeEventListener("mousemove", move);
      slider.removeEventListener("mouseleave", end);
      slider.removeEventListener("mouseup", end);

      slider.removeEventListener("touchstart", start);
      slider.removeEventListener("touchmove", move);
      slider.removeEventListener("touchend", end);
    };
  }, []);

return (
  <section className={styles.container} id="Skills">
    
    <div className={styles.header}>
      <span className={styles.kicker}>What I use</span>
      <h1 className={styles.title}>&lt; Skills & Tools /&gt;</h1>
      <p className={styles.subtitle}>
        Technologies and tools I work with on a daily basis
      </p>
    </div>

    <div className={styles.slider} ref={sliderRef}>
      <div className={styles.track}>
        
        {skills.map((skill, index) => (
          <div key={index} className={styles.item}>
            <div>
              <img
                src={getImage(skill.imageSrc)}
                alt={skill.title}
                className={styles.logo}
              />
              <p className={styles.skillName}>{skill.title}</p>
            </div>
          </div>
        ))}

        {skills.map((skill, index) => (
          <div key={`dup-${index}`} className={styles.item}>
            <div>
              <img
                src={getImage(skill.imageSrc)}
                alt={skill.title}
                className={styles.logo}
              />
              <p className={styles.skillName}>{skill.title}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>
);
}