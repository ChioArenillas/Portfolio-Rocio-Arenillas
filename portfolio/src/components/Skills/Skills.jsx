import React, { useRef, useEffect } from "react";
import styles from "./Skills.module.css";
import skills from "/src/data/skills.json";
import { useLanguage } from "../../context/LanguageContext";
import { getSkillIcon } from "../../utils/assets";

export default function Skills() {
  const { t } = useLanguage();
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let isHovered = false;
    let isTouching = false;
    let startX = 0;
    let startScrollLeft = 0;
    let fractionalCarry = 0;
    let animationFrameId = null;
    let lastTimestamp = null;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const wrapScroll = () => {
      const halfWidth = slider.scrollWidth / 2;
      if (halfWidth <= 0) return;

      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      }
    };

    const step = (timestamp) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      if (
        !isDown &&
        !isHovered &&
        !isTouching &&
        !prefersReducedMotion.matches
      ) {
        fractionalCarry += 45 * deltaSeconds;
        const wholePixels = Math.floor(fractionalCarry);
        if (wholePixels >= 1) {
          slider.scrollLeft += wholePixels;
          fractionalCarry -= wholePixels;
          wrapScroll();
        }
      }

      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      startScrollLeft = slider.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      const halfWidth = slider.scrollWidth / 2;
      let nextScroll = startScrollLeft - walk;

      if (halfWidth > 0) {
        if (nextScroll < 0) {
          startScrollLeft += halfWidth;
          nextScroll += halfWidth;
        } else if (nextScroll >= halfWidth) {
          startScrollLeft -= halfWidth;
          nextScroll -= halfWidth;
        }
      }

      slider.scrollLeft = nextScroll;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isDown = false;
      isHovered = false;
    };

    const handleTouchStart = () => {
      isTouching = true;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      wrapScroll();
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider.addEventListener("touchend", handleTouchEnd, { passive: true });
    slider.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const renderSkillItem = (skill, key) => (
    <div key={key} className={styles.item}>
      <img
        src={getSkillIcon(skill.imageSrc)}
        alt={skill.title}
        className={styles.logo}
        draggable={false}
      />
      <p className={styles.skillName}>{skill.title}</p>
    </div>
  );

  return (
    <section className={`reveal ${styles.container}`} id="Skills">
      <div className={styles.header}>
        <span className={styles.kicker}>{t.skills.kicker}</span>
        <h1 className={styles.title}>{t.skills.title}</h1>
        <p className={styles.subtitle}>{t.skills.subtitle}</p>
      </div>

      <div className={styles.slider} ref={sliderRef}>
        <div className={styles.track}>
          {skills.map((skill) => renderSkillItem(skill, skill.title))}
          {skills.map((skill) => renderSkillItem(skill, `dup-${skill.title}`))}
        </div>
      </div>
    </section>
  );
}
