import { Col, Container, Row } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

function Skills() {

  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h2>{`<Compétences/>`}</h2>
              <div className="skills-box">
                <ul class="carousel">
                  <div className="front">
                    <h4>
                      <FaCode /> Front-End
                    </h4>
                    <p>
                      Création et intégration de sites web et applications
                      mobiles responsive.
                    </p>
                    <ul>
                      <li>
                        HTML5 / CSS3 <em>(certification OpenClassRoom)</em>
                      </li>
                      <li>ReactJS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>Tailwind</li>
                      <li>Bulma</li>
                    </ul>
                  </div>
                  <div className="back">
                    <h4>
                      <FaDatabase /> Back-End
                    </h4>
                    <p>
                      Création et gestion de bases de données, programmation
                      orientée objet et modèle, mise en ligne.
                    </p>
                    <ul>
                      <li>JavaScript</li>
                      <li>NodeJS / Express</li>
                      <li>MVC</li>
                      <li>API rest</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div className="management">
                    <h4>
                      <FaUsers /> Gestion de projet
                    </h4>
                    <p>
                      Travail en équipe avec élaboration d'un projet de bout en
                      bout, coding pair.
                    </p>
                    <ul>
                      <li>
                        Méthodologie SCRUM{" "}
                        <em>(certification Scrum Master 1)</em>
                      </li>
                      <li>Rédaction d’un cahier des charges</li>
                      <li>Maquettage & wireframes</li>
                      <li>User stories & personae</li>
                      <li>Versioning Git/GitHub</li>
                    </ul>
                  </div>
                  <div className="work">
                    <h4>
                      <FaLaptopCode /> Environnement de travail
                    </h4>
                    <p>Environnement de travail et outils extérieur.</p>
                    <ul>
                      <li>
                        <strong>Système d'exploitation : </strong>MacOS
                      </li>
                      <li>
                        <strong>Workflow : </strong>Git, MAMP, Chrome, Postman,
                        Discord, CLI, NPM
                      </li>
                      <li>
                        <strong>IDE : </strong>Visual Studio Code
                      </li>
                      <li>
                        <strong>Autres compétences : </strong>Anglais{" "}
                        <em>(B2)</em>, Marketing digital, SEO, AB Test, <br />
                        Interaction Studio, Python
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Skills;
