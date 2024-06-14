import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {
 
  return (
    <section id="about">
      <h2 className="section-heading">About Me</h2>
      <div id="about-content">
        <div id="about-description">
          <p>
            My interest in Software Development started about a year ago when I decided to take part in a series of online courses to enhance my skills. Technology has always fascinated me, and diving into software development felt like the natural next step.
          </p>
          <p>
            I was thrilled to be accepted into an intensive bootcamp hosted by Northcoders UK. Throughout this bootcamp, I gained hands on experience in both front-end and back-end development, completing multiple projects and building dynamic web applications. 
          </p>
          <p>
            Having successfully completed the course, I am now focused on expanding my knowledge through solo projects, while actively seeking opportunities in the field. I'm passionate about creating efficient, user-friendly applications and continuously learning to stay at the forefront of technology. 
          </p>
        </div>
        <div id="about-image">
          <img alt="Billy Dentith" src={"/assets/Me.JPG"} />
        </div>
      </div>
    </section>
  );
}
