import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy un apasionado de la informática con experiencia en{" "}
              <b className="purple">desarrollo web full stack</b> usando tecnologías como{" "}
              <i>
                <b className="purple"> Vue.js, Symfony y Spring Boot.</b>
              </i>
              <br />
              <br />
              Me especializo en el desarrollo de{" "}
              <b className="purple">aplicaciones escalables y APIs RESTful</b>, así como
              en la integración de sistemas con{" "}
              <b className="purple">Mirth Connect y HL7.</b>
              <br />
              <br />
              Tengo interés en áreas como la{" "}
              <b className="purple">alta disponibilidad en bases de datos MySQL</b>,
              el desarrollo backend moderno y la{" "}
              <b className="purple">innovación en arquitecturas distribuidas</b>.
              <br />
              <br />
              También me encanta trabajar con contenedores{" "}
              <i>
                <b className="purple">Docker</b>
              </i>{" "}
              y realizar{" "}
              <b className="purple">web scraping</b> para extraer valor de datos web.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dudes en <span className="purple">conectarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MOREXPO"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/iagomoreda1910"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://es.linkedin.com/in/iago-moreda-exp%C3%B3sito"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iagomoreda10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
