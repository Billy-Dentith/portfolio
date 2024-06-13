import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/NavBar.css'

export default function NavBar() {
  return (
    <Navbar fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#">Billy Dentith</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="mailto:billydentith@hotmail.co.uk">
              <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
            </Nav.Link>
            <Nav.Link href="https://github.com/billy-dentith" target="_blank">
              <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/billy-dentith/" target="_blank">
              <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
