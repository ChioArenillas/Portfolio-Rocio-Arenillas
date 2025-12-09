import React from 'react'
import styles from "./Contact.module.css";
import github from "../../assets/contact/githubIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";


export default function Contact() {
    return (
        <section className={styles.container} id='Contact'>
            <div className={styles.titleBackground}>
                <h1 className={styles.title}>&lt;Contact/&gt;</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.socials}>
                        <a href="https://github.com/ChioArenillas" target="_blank" rel="noopener noreferrer">
                            <img className={styles.social} src={github} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/roc%C3%ADo-arenillas-627813279/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.social} src={linkedin} alt="linkedin" /></a>
                    </div>
                    <p>I’d love to hear from you! </p>
                    <p>Whether you have a brilliant idea, a random thought, or just want to say hi.  </p>
                    <p>Don’t be shy!</p>
                </div>

                <div className={styles.box}>
                    <p className={styles.inputTitle}>Name</p>
                    <input className={styles.input} placeholder="Your Name" type="text" />

                    <p className={styles.inputTitle}>Email Address</p>
                    <input className={styles.input} placeholder="Your Email" type="email" />

                    <p className={styles.inputTitle}>Your Message</p>
                    <textarea className={styles.input} placeholder="Message" rows="5" required></textarea>

                    <button className={styles.btn}>Say Hello!</button>
                </div>
            </div>
        </section >
    )
}
