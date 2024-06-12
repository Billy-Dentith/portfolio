import React from "react";
import "../styles/Experience.css";
import JobsTable from "./JobsTable";

export default function Experience() {
  return (
    <section id="experience-section">
      <h2 className="section-heading">Experience</h2>
      <JobsTable></JobsTable>
    </section>
  );
}
