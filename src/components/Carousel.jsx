import React, { useState } from "react";
import "../styles/Projects.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Carousel.css'
import Carousel from "react-bootstrap/Carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const projects = {
    "NC News Back-end": {
      title: "NC News Back-end",
      desc: "A backend API for a news article website",
      techStack: "JavaScript, Express, PostgreSQL",
      link: "https://github.com/Billy-Dentith/nc-news-backend",
      open: "",
      image: "/assets/Computer.jpg",
    },
    "NC News Front-end": {
      title: "NC News Front-end",
      desc: "A news article website using the backend I previously built",
      techStack: "JavaScript, React.js, CSS",
      link: "https://github.com/Billy-Dentith/nc-news-frontend",
      open: "",
      image: "/assets/Computer.jpg",
    },
    "Plan Ahead Back-end": {
      title: "Plan Ahead Back-end",
      desc: "The back-end for a travel planning application where users can plan their day around their chosen interests and location",
      techStack: "MongoDB, Mongoose, OpenStreetMaps API",
      link: "https://github.com/OniUnderscore/DayPlanner",
      open: "",
      image: "/assets/Computer2.jpg",
    },
    "Plan Ahead Front-end": {
      title: "Plan Ahead Front-end",
      desc: "The front-end for a travel planning application where users can plan their day around their chosen interests and location",
      techStack: "React Native, EXPO, Google Maps API",
      link: "https://github.com/Billy-Dentith/DayPlanner-FE",
      open: "",
      image: "/assets/Code.jpg",
    },
  };

  return (
    <Carousel>
      {Object.keys(projects).map((project, index) => (
        <Carousel.Item key={index}>
          <img
            src={projects[project]["image"]}
            alt={project}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>{projects[project]["title"]}</h3>
            <p>{projects[project]["desc"]}</p>
            <p>{projects[project]["techStack"]}</p>
            <span>
              <a className="github-icon" href={projects[project]["link"]}>
                <GitHubIcon
                  style={{
                    fontSize: 25,
                    color: "var(--lightest-slate)",
                    margin: 10,
                    marginRight: 20,
                  }}
                />
              </a>
              <a className="browser-icon" href={projects[project]["open"]}>
                <OpenInBrowserIcon
                  style={{
                    fontSize: 25,
                    color: "var(--lightest-slate)",
                    margin: 10,
                    marginLeft: 20
                  }}
                />
              </a>
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
