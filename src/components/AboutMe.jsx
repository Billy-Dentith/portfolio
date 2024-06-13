import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {
  // const frontendSkills = ["JavaScript", "Node.js", "React", "React Native"];
  // const backendSkills = ["PostgreSQL", "Express", "MongoDB", "Mongoose"];

  return (
    <section id="about-me-section">
      <h2 className="section-heading">About Me</h2>
      <div id="about-content">
        <div id="about-description">
          <p>
            My interest in Software Development started about a year ago when I
            decided to take part in a couple of online courses to try and up-skill. I have always had an interest in
            technology throughout my life and this was the next logical step.
          </p>
          <p>
            I then was accepted onto an intensive bootcamp hosted by Northcoders UK. During this bootcamp I learnt
            both front-end and back-end development and carried out multiple projects building web apps.
          </p>
          <p>
            I have now finished the course and I am advancing my knowledge by carrying out my own solo projects, while also applying for jobs in the field.
          </p>
          {/* <p>Here are a few technologies I've been working with recently:</p> */}
          {/* <div className="skills">
            <ul className="skills-list">
              <h4>Front-end</h4>
              {frontendSkills &&
                frontendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
            <ul className="skills-list">
              <h4>Back-end</h4>
              {backendSkills &&
                backendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div> */}
        </div>
        <div id="about-image">
          <img alt="Billy Dentith" src={"/assets/Me.png"} />
        </div>
      </div>
    </section>
  );
}
