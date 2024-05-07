import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiSass,

} from "react-icons/di";
import {
  SiFirebase,
  SiRedux,
  SiWebpack,
  SiVite,
} from "react-icons/si";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="html">
        <DiHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Css">
        <DiCss3  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Boostrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Sass">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="WebPack">
        <SiWebpack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vite">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <TbBrandNextjs />
      </Col>
    </Row>
  );
}

export default Techstack;
