import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Iago Moreda Expósito</span> de{" "}
            <span className="purple">Baiona, España.</span>
            <br />
            Actualmente trabajo como ingeniero de integración en Bahía Software S.L.
            <br />
            Me gradué en Ingeniería Informática por la Universidad de Vigo, y también soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
            <br />
            <br />
            Además del desarrollo web, ¡hay otras cosas que me apasionan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas tecnologías
            </li>
            <li className="about-activity">
              <ImPointRight /> Automatizar procesos con scripts y contenedores
            </li>
            <li className="about-activity">
              <ImPointRight /> Mejorar sistemas existentes y documentarlos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La clave está en construir soluciones útiles, robustas y bien pensadas."{" "}
          </p>
          <footer className="blockquote-footer">Iago Moreda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
