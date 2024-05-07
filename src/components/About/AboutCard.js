import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello! I'm <span className="purple">Johana España</span>, a passionate Full-Stack Developer 
          with three years of experience in <span className="purple"> web development</span>. I thrive 
          in dynamic environments where I can leverage my skills to craft 
          innovative solutions and contribute to the success of impactful 
          projects. 
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowering change through innovative solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Johana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
