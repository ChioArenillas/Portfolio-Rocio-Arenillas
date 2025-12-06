import React from 'react'
import styles from "./Skills.module.css";
import skills from "/src/data/skills.json";
import { useRef, useEffect } from "react";

const images = import.meta.glob("/src/assets/skills/*", { eager: true });

export default function Skills() {
  const getImage = (file) => {
    const entry = Object.values(images).find(img => img.default.includes(file));
    return entry?.default;
  };
  const sliderRef = useRef(null);
useEffect(() => {
  const track = document.querySelector(`.${styles.track}`);
  const items = track.children;

  let width = 0;
  for (let i = 0; i < items.length / 2; i++) {
    width += items[i].offsetWidth;
  }

  track.style.setProperty("--scroll-width", `${width}px`);
}, []);

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
    <section className={styles.container} id="skills">
      
      <div className={styles.titleBackground}>
        <h1 className={styles.title}>SKILLS & TOOLS</h1>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.track}>

          {/* Primera pasada */}
          {skills.map((skill, index) => (
            <div key={index} className={styles.item}>
              <img src={getImage(skill.imageSrc)} alt={skill.title} className={styles.logo}/>
              <p className={styles.skillName}>{skill.title}</p>
            </div>
          ))}

          {/* Segunda pasada */}
          {skills.map((skill, index) => (
            <div key={`dup-${index}`} className={styles.item}>
              <img src={getImage(skill.imageSrc)} alt={skill.title} className={styles.logo}/>
              <p className={styles.skillName}>{skill.title}</p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
