import React from "react";
import '../styles/Intro.css'

export default function Intro() {
  return (
    <section id="intro-section">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Billy Dentith.</h2>
			<h3 className="big-heading">Junior Software Developer.</h3>
			<p>I'm a junior software developer from London, England. Currently, I'm focused on building up my projects portfolio, while searching for a role in the tech field.</p>
			<a className="resume-link">Check out my resume!</a>
    </section>
  );
}
