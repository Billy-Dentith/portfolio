import React from "react";
import "../styles/Projects.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

export default function CarouselComponent() {

  const projects = {
    "NC News Back-end": {
      title: "NC News Back-end",
      desc: "The backend API for a news article website.",
      techStack: "JavaScript, Node.js, Express, PostgreSQL",
      link: "https://github.com/Billy-Dentith/nc-news-backend",
      open: "https://news-app-8vge.onrender.com/api",
      image: "/assets/NC-News-Back-End.jpg",
    },
    "NC News Front-end": {
      title: "NC News Front-end",
      desc: "A news article website using the backend I previously built.",
      techStack: "JavaScript, React, CSS",
      link: "https://github.com/Billy-Dentith/nc-news-frontend",
      open: "https://bd-nc-news.netlify.app/",
      image: "/assets/NC-News.jpg",
    },
    "Plan Ahead Back-end": {
      title: "Plan Ahead Back-end",
      desc: "The back-end for a travel planning application where users can plan their day around their chosen interests and location.",
      techStack: "MongoDB, Mongoose, OpenStreetMaps API",
      link: "https://github.com/OniUnderscore/DayPlanner",
      open: "https://github.com/OniUnderscore/DayPlanner",
      image: "/assets/Code.jpg",
    },
    "Plan Ahead Front-end": {
      title: "Plan Ahead Front-end",
      desc: "The front-end for a travel planning application where users can plan their day around their chosen interests and location.",
      techStack: "React Native, EXPO, Google Maps API",
      link: "https://github.com/Billy-Dentith/DayPlanner-FE",
      open: "https://github.com/Billy-Dentith/DayPlanner-FE",
      image: "/assets/Plan-Ahead.jpg",
    },
    "Buon Appetito Full-Stack": {
      title: "Buon Appetito Full-Stack",
      desc: "A full-stack application for a restaurant that allows users to view menus, add items to their cart and place an order. Also allows staff to add, edit and delete items from the menu, as well as view orders and update their statuses.",
      techStack: "Next.js, NextAuth.js, Node.js, Express, PostgreSQL, Tailwind CSS",
      link: "https://github.com/Billy-Dentith/restaurant-app-be",
      open: "https://github.com/Billy-Dentith/restaurant-app",
      image: "/assets/Buon-Appetito.png",
    },
    "Event Nest Full-Stack": {
      title: "Event Nest Full-Stack",
      desc: "A full-stack application for creating and managing events, where users can join events and add them to their Google calendar, and staff can add and edit events.",
      techStack: "React, Node.js, Express, MongoDB, Mongoose, Firebase, CSS, Google Calendar API, Stripe API",
      link: "https://github.com/Billy-Dentith/events-platform",
      open: "https://event-nest-bd.netlify.app/",
      image: "/assets/Event-Nest.png",
    },
  };

  return (
    <Carousel>
      {Object.keys(projects).map((project, index) => (
        <Carousel.Item key={index}>
          <img
            src={projects[project]["image"]}
            alt={project}
            className="carousel-img"
          />
          <Carousel.Caption>
            <h3>{projects[project]["title"]}</h3>
            <p>{projects[project]["desc"]}</p>
            <p className="tech-stack">{projects[project]["techStack"]}</p>
            <span id="external-links">
              <a className="github-icon" aria-label="GitHub" href={projects[project]["link"]}>
                <GitHubIcon
                  style={{
                    fontSize: 30,
                  }}
                />
              </a>
              <a className="browser-icon" aria-label="External Link" href={projects[project]["open"]}>
                <OpenInBrowserIcon
                  style={{
                    fontSize: 35,
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
