import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blackJack from "../../Assets/Projects/blackJackApp.png";
import menu from "../../Assets/Projects/MenuApp.png";
import heroes from "../../Assets/Projects/HeroesApp.png";
import calendar from "../../Assets/Projects/calendarApp.png";
import GifExpertApp from "../../Assets/Projects/GifExpertApp.png";
import JournalApp from "../../Assets/Projects/JournalApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Calendar App"
              description="Personal calendar application built with JavaScript, React, Redux, Firebase, and Hooks. Organize your events and tasks seamlessly and efficiently, with features that enable real-time management, data storage, and an intuitive interface."
              ghLink="https://github.com/johanaes27/CalendarApp"
              demoLink="https://mern-calendar-johana.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JournalApp}
              isBlog={false}
              title="Journal App"
              description="Secure journaling app with user authentication, built with JavaScript, React, Redux, Firebase, and Hooks. Capture your thoughts, ideas, and memories effortlessly, complete with titles, descriptions, and image uploads."
              ghLink="https://github.com/johanaes27/08-journal-app"
              demoLink="https://glittering-baklava-1a98e6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heroes}
              isBlog={false}
              title="Heroes App"
              description="An app with secure login functionality, allowing users to authenticate either with traditional username/password credentials or through Google Sign-In integration using Firebase authentication. Once logged in, users gain access to a comprehensive database of Marvel and DC superheroes, complete with photos and detailed descriptions of each character's attributes. Built with JavaScript, React, Redux, and a search functionality, the app enables users to easily explore and find their favorite heroes."
              ghLink="https://github.com/johanaes27/07-heroes-spa"
              demoLink="https://heroesappje.netlify.app/marvel"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackJack}
              isBlog={false}
              title="BlackJack App"
              description="A sleek and engaging Blackjack game developed solely with JavaScript. Test your luck against the computer and experience the thrill of the casino from the comfort of your own device. Receive instant feedback on your wins and losses, making every hand a heart-pounding adventure."
              ghLink="https://github.com/johanaes27/js-vite-blackjack"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GifExpertApp}
              isBlog={false}
              title="GifExpertApp"
              description="A dynamic GIF search app powered by React, offering users a seamless experience to explore and discover a wide range of animated images. With its intuitive interface and robust search functionality, users can easily find their favorite GIFs for any occasion. Whether you're looking for a laugh or a reaction, GIFSearch has you covered."
              ghLink="https://github.com/johanaes27/react-gif-expert"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Menu App"
              description="A dynamic restaurant menu app built with React, offering users the convenience of filtering through breakfast, lunch, dinner, and shakes options. With its intuitive design and user-friendly interface, MenuMaster provides a seamless dining experience, allowing users to explore and select their favorite dishes with ease."
              ghLink="https://github.com/johanaes27/Menu"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
