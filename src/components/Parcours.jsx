import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function Parcours() {
  const [selectedTimeLine, setSelectedTimeLine] = useState("school");

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  const schoolTimeLine = (
    <div className="school-timeline">
      <div className="school-timeline-item" ref={ref1}>
        <div className={`school-timeline-content ${inView1 ? "visible" : ""}`}>
          <h3>Développeuse Web et web mobile - Niveau 5</h3>
          <h4>Simplon.Co - Montreuil - 2023/2024</h4>
          <p>
            <em>
              {" "}
              <strong>Stack : </strong>{" "}
            </em>{" "}
            MongoDB, Express, ReactJs, NodeJs{" "}
          </p>
        </div>
      </div>
      <div className="school-timeline-item" ref={ref2}>
        <div className={`school-timeline-content ${inView2 ? "visible" : ""}`}>
          <h3>English Program as a Foreign Language</h3>
          <h4>Barbados Community College - Barbade - 2023</h4>
          <p>
            <em>
              {" "}
              <strong>Spécialité :</strong>{" "}
            </em>{" "}
            Anglais intermédiaire
          </p>
        </div>
      </div>
      <div className="school-timeline-item" ref={ref3}>
        <div className={`school-timeline-content ${inView3 ? "visible" : ""}`}>
          <h3>Master Digital Marketing and Data Analytics</h3>
          <h4>EMLV/IIM - La Défense - 2020/2022</h4>
          <p>
            <em>
              {" "}
              <strong>Spécialité :</strong>{" "}
            </em>{" "}
            Analyse de données
          </p>
        </div>
      </div>
      <div className="school-timeline-item" ref={ref4}>
        <div className={`school-timeline-content ${inView4 ? "visible" : ""}`}>
          <h3>Licence Économie Gestion</h3>
          <h4>UQAC - (Chicoutimi - Canada) - 2017/2018</h4>
          <p>
            <em>
              {" "}
              <strong>Spécialité :</strong>{" "}
            </em>{" "}
            Finance et management des entreprisess{" "}
          </p>
        </div>
      </div>
      <div className="school-timeline-item" ref={ref5}>
        <div className={`school-timeline-content ${inView5 ? "visible" : ""}`}>
          <h3>Bachelor Universitaire Technologique</h3>
          <h4>Sorbonne Paris Nord (Villetaneuse) - 2015/2017</h4>
          <p>
            <em>
              {" "}
              <strong>Spécialité :</strong>{" "}
            </em>{" "}
            Gestion des Entreprises et des Administrations
          </p>
        </div>
      </div>
    </div>
  );

  const workTimeLine = (
    <div className="work-timeline">
      <div className="work-timeline-item" ref={ref1}>
        <div className={`work-timeline-content ${inView1 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>
                Projet final -{" "}
                <a href="https://github.com/ErikaPierre/CopOrPass_BACK">
                  CopOrPass
                </a>
              </h3>
            </div>
            <div>
              <p>Mai 2024</p>
            </div>
          </div>

          <p>
            Plateforme en ligne qui permet aux utilisateurs de rechercher,
            découvrir et suivre les dernières sorties de sneakers.
          </p>
          <p>
            <strong> Attentes </strong> <br />
            Front : création d'un interface utilisateur responsive <br />
            Back : création et gestion de base de données NoSQL avec CRUD
          </p>
          <p>
            <u>Technologies utilisées :</u>
            <ul>
              <li>HTML/CSS + JavaScript</li>
              <li>ReactJS</li>
              <li>NodeJS / Express</li>
              <li>MongoDB</li>
              <li>Bulma</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="work-timeline-item" ref={ref2}>
        <div className={`work-timeline-content ${inView2 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>Developpeuse WordPress</h3>
            </div>
            <div>
              <p>Fev - Avr 2024</p>
            </div>
          </div>

          <h4>
            <em>Quera (Agence Web)</em>
          </h4>
          <p>
            <u>Missions:</u>
            <ul>
              <li>Maquettage sur Figma</li>
              <li>Intégration de maquette sur WordPress avec Elementor PRO</li>
              <li>Démarchage et prise de rendez-vous clients</li>
              <li>Scraping de données avec Python</li>
              <li>Création d' extension WordPress en PHP</li>
              <li>Veille concurrentielle</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="work-timeline-item" ref={ref3}>
        <div className={`work-timeline-content ${inView3 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>Assistante E-marchandising</h3>
            </div>
            <div>
              <p>2020 - 2022</p>
            </div>
          </div>
          <h4>
            <em>Bouygues Télécom</em>
          </h4>
          <p>
            <u>Missions:</u>
            <ul>
              <li>
                Optimisation des produits et services sur le site et
                l’application
              </li>
              <li>Personnalisation des offres avec Interaction Studio</li>
              <li>Lancements des nouvelles offres, produits et services</li>
              <li>Déploiement des animations commerciales</li>
              <li>Analyse des performances des dispositifs mise en place</li>
              <li>
                Optimisation des résultats de recherches (SEO, moteur de
                recherche)
              </li>
              <li>Mise en place de test client : AB test.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="work-timeline-item" ref={ref4}>
        <div className={`work-timeline-content ${inView4 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>Hôtesse d’accueil</h3>
            </div>
            <div>
              <p>Nov 2019 - Avr 2020</p>
            </div>
          </div>

          <h4>
            <em>EDF DSIT</em>
          </h4>
          <p>
            <u>Missions:</u>
            <ul>
              <li>
                Gestions des appels et redirection vers les services compétents
              </li>
              <li>Intégration de maquette sur WordPress avec Elementor PRO</li>
              <li>Contrôle des identités et fabrications des badges d’accès</li>
              <li>Préparation et gestion des salles de réunion</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="work-timeline-item" ref={ref5}>
        <div className={`work-timeline-content ${inView5 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>Agent de transfert</h3>
            </div>
            <div>
              <p>Juin - Aout 2019</p>
            </div>
          </div>

          <h4>Education First (EF)</h4>
          <p>
            <u>Missions:</u>
            <ul>
              <li>Accueil et accompagnement des étudiants</li>
              <li>Organisation des transferts des étudiants en transit</li>
              <li>
                Gestion et vérifications des documents d’identité et de voyage
              </li>
              <li>Coordination des déplacements </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="work-timeline-item" ref={ref6}>
        <div className={`work-timeline-content ${inView6 ? "visible" : ""}`}>
          <div className="career-timeline">
            <div>
              <h3>Assistante Marketing</h3>
            </div>
            <div>
              <p>Janv - Mai 2018</p>
            </div>
          </div>

          <h4> Projet Junior Entreprise</h4>
          <p>
            <u>Missions:</u>
            <ul>
              <li>
                Étude de marché sur les tendances de l’année et besoin des
                cibles
              </li>
              <li>Gestion du chiffre d'affaires annuel et des budgets</li>
              <li>
                Élaboration de bilans marketing, comptable et finance de
                l'organisation
              </li>
              <li>Coordination des déplacements </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="career" id="career">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>{"<Parcours/>"}</h2>
            <div className="button-group">
              <button
                type="button"
                className="btn btn-school btn-outline-success"
                onClick={() => setSelectedTimeLine("school")}
              >
                Académique
              </button>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => setSelectedTimeLine("work")}
              >
                Profesionnel
              </button>
            </div>
            {selectedTimeLine === "school" && schoolTimeLine}
            {selectedTimeLine === "work" && workTimeLine}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Parcours;
