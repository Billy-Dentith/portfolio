import React from "react";
import "../styles/Skills.css";
import {
  ReactIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  NodeIcon,
  GitIcon,
  PostGreSQLIcon,
  MongoDBIcon,
  MongooseIcon,
  ExpressIcon,
  AxiosIcon,
  JestIcon,
  ExpoIcon
} from "./Icons/Icons.jsx";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "Git", icon: GitIcon },
    { name: "PostgreSQL", icon: PostGreSQLIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "Axios", icon: AxiosIcon },
    { name: "Jest", icon: JestIcon },
    { name: "Expo", icon: ExpoIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Mongoose", icon: MongooseIcon },
  ];

  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <p>Here are some technologies I've worked with:</p>
      <ul className="skills-list">
        {skills.map((skill, index) => (
            <li key={index}>
                <div className="skills-box">
                    <skill.icon />
                    <p>{skill.name}</p>
                </div>
            </li>
        ))}
      </ul>
    </section>
  );
}
