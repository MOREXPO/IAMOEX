import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import analytics from "../../Assets/Projects/analytics.png";
import symfonyReact from "../../Assets/Projects/symfony-react.png";
import iamon from "../../Assets/Projects/iamon.png";
import wordpressDocker from "../../Assets/Projects/wordpress.png";
import symfonyVue from "../../Assets/Projects/symfony-vue.png";
import resenas from "../../Assets/Projects/resenas.png";
import mediaServer from "../../Assets/Projects/media-server.png";
import gloryAndMonsters from "../../Assets/Projects/glory-and-monsters.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Algunos de mis <strong className="purple">proyectos personales</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí tienes una selección de desarrollos que he publicado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="IAMOEX (Portfolio)"
              description="Mi portfolio personal construido con React, mostrando mis proyectos, habilidades y contacto. Utiliza animaciones y diseño responsive."
              ghLink="https://github.com/MOREXPO/IAMOEX"
              demoLink="https://iamoex.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analytics}
              isBlog={false}
              title="Hashtag Analytics"
              description="Aplicación que recopila los primeros 100 tweets de un hashtag (#farina) y los visualiza en gráficos con estadísticas clave."
              ghLink="https://github.com/MOREXPO/hashtag-analytics"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symfonyReact}
              isBlog={false}
              title="Symfony + React Template"
              description="Plantilla base para proyectos con Symfony en backend y React en frontend, con entorno Docker y base de datos MariaDB preconfigurada."
              ghLink="https://github.com/MOREXPO/symfony-docker-react"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iamon}
              isBlog={false}
              title="IAmOnV2"
              description="Red social para compartir tu disponibilidad en tiempo real. Permite indicar cuándo estás ocupado o disponible para tus contactos."
              ghLink="https://github.com/MOREXPO/IAmOnV2"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordpressDocker}
              isBlog={false}
              title="WordPress + Ioncube/SourceGuardian"
              description="Stack Docker para WordPress con Ioncube y SourceGuardian integrados, ideal para trabajar con plugins cifrados o protegidos."
              ghLink="https://github.com/MOREXPO/wordpress-ioncube-sourceguardian"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={symfonyVue}
              isBlog={false}
              title="Symfony + Vue Template"
              description="Plantilla Docker para proyectos con Symfony como backend y Vue como frontend, con MySQL como base de datos."
              ghLink="https://github.com/MOREXPO/symfony-docker-vue"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resenas}
              isBlog={false}
              title="Reseñas de Películas y Series"
              description="Aplicación que usa bots para scrapear reseñas de películas/series, almacenarlas y analizarlas. Backend en Symfony, frontend en Vue."
              ghLink="https://github.com/MOREXPO/Resenas"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediaServer}
              isBlog={false}
              title="Servidor de Medios con Docker"
              description="Servidor multimedia autohospedado con Docker usando Radarr, Sonarr, Lidarr, Bazarr, Prowlarr, Jellyfin, Jellyseerr, Ombi, Plex y qBittorrent, ideal para organizar contenido personal."
              ghLink="https://github.com/MOREXPO/media-server"
              demoLink="https://tv.iamoex.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gloryAndMonsters} // Añade esta imagen a tu proyecto
              isBlog={false}
              title="Glory and Monsters"
              description="Videojuego 2D desarrollado con Unity y C#. Aventura de acción con exploración, combates y progresión del personaje. Proyecto personal para experimentar con desarrollo de juegos."
              ghLink="https://github.com/MOREXPO/GloryAndMonsters"
              demoLink="https://gamejolt.com/games/GloryAndMonsters/494218"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
