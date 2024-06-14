import React from "react";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <section id="intro">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Billy Dentith.</h2>
      <h3 className="big-heading">Junior Software Developer.</h3>
      <p>
        I'm a junior software developer from London, England, dedicated to creating engaging user experiences by blending technology and design. Currently, I'm building my portfolio with projects that showcase this balance. 
      </p>
      <a
        className="cv-link"
        href="/Billy-Dentith-CV.pdf"
        download
      >
        Check out my CV!
      </a>
    </section>
  );
}
