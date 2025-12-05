import React from 'react'
import styles from "./Skills.module.css";
import skills from "../../data/skills.json"


export default function Skills() {
  return (
    <section id="skills">
      <h1>SKILLS & TOOLS</h1>
      <div>
        <div>{
            skills.map((skill, id) =>{
                return <div key={id}>
                    <div><img src={require(`../../assets/skills/${skill.imageSrc}`)} alt={skill.title} /></div>
                    </div>
            })
            }</div>
        <ul>

        </ul>
      </div>
    </section>
  )
}
