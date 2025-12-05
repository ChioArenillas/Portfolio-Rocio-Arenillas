import React from 'react'
import styles from "./About.module.css";
import github from "../../../assets/contact/githubIcon.png"
import linkedin from "../../../assets/contact/linkedinIcon.png"
import about from "../../../assets/about/aboutImg.jpg"

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div >
          <h1 className={styles.title}>&lt;Holaa! I’m Chio, 👋/&gt;</h1>
          <p className={styles.description}>&lt;p&gt; I’m a 
                <span className={styles.colorText}> Web Designer </span>
                & <span className={styles.colorText}> Front-End Developer </span> 
                based in Madrid. I love bringing ideas to life online through sleek, responsive, and user-focused websites. My goal is to create digital experiences that not only look beautiful but also feel intuitive and engaging for every user.
                &lt;/p&gt;</p>
          <p className={styles.description}>&lt;p&gt; Coming from a background in 
                <span className={styles.colorText}> Psychology </span> and 
                <span className={styles.colorText}> Art Therapy, </span> 
                along with experience in team and personnel management, I bring a unique perspective to design and development. This mix helps me understand both user behaviour and human-centre design, while also giving me strong organizational and collaborative skills.
                &lt;/p&gt;</p>
        </div>
        <div className={styles.btnsection}>
            <div>
             <a className={styles.button} href="https://chioarenillas.github.io/CV/">Download CV</a>
            </div>
            <div className={styles.socials}>
              <a href="https://github.com/ChioArenillas" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" /></a>       
              <a href="https://www.linkedin.com/in/roc%C3%ADo-arenillas-627813279/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" /></a>        
            </div>
          </div>
        </div>
        <img className={styles.aboutImg}src={about} alt="About Img" />
    </section>
  )
}
