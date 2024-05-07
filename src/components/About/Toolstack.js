import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGitAlt } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiNpm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visualstudiocode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitAlt">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Npm">
        <SiNpm />
      </Col>
    </Row>
  );
}

export default Toolstack;
