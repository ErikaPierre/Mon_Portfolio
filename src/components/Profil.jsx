import { Col, Container, Row } from "react-bootstrap";
import memoji from "../assets/memoji.jpeg"

function Profil() {
  return (
    <>
      <section className="profil" id="profil">
        <Container>
          <Row className="align-items-center">
            <h2>{`<A_Propos/>`}</h2>
            <Col xs={12} md={6} xl={5}>
              <img
                src={memoji}
                alt="Avatar of Erika PIERRE"
                className="profile-img"
              />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <p>
                Développeuse web junior, je suis à la recherche d'une alternance
                après avoir passé 7 mois de formation chez{" "}
                <em>
                  <strong>Simplon.Co </strong>
                </em>
                ainsi qu'un stage de 2 mois chez{" "}
                <em>
                  <strong>Quera</strong>
                </em>
                , une agence web. Cette expérience m’a permis d’acquérir une
                certaine autonomie, persévérance et curiosité. J’ai ainsi pu
                avoir un oeil plus ouvert sur les technologies utilisées,
                étudiées, renforcer et étoffer mon panel de compétences.
              </p>
              <p>
                <strong>Informations</strong>
                <ul>
                  <li>Alternance développeuse web : FRONT/BACK/FULLSTACK </li>
                  <li>
                    Durée : 18 mois <em>(Simplon.Co)</em> <strong>OU</strong> 21
                    mois <em>(O'Clock)</em>
                  </li>
                  <li>
                    Rythme : 3 semaines / 1semaine <em>(Simplon.Co)</em>{" "}
                    <strong>OU</strong> 2 semaines / 1semaine <em>(O'Clock)</em>
                  </li>
                  <li>Début : Septembre / Octobre</li>
                  <li>Disponibilité : 26/08/2024</li>
                  <li>
                    Technologies : MongoDB, Express, React, Node.js{" "}
                    <em>(MERN)</em>
                  </li>
                </ul>
                <p>
                  <strong>
                    &#128680; Je suis ouverte pour Préparation Opérationnelle à
                    l'Emploi Individuelle (POEI).
                  </strong>
                </p>
              </p>
              <p>
                Mes différentes expériences académiques et professionnelles
                m'ont permis de développer certains softskills tel que :
                <ul>
                  <li>
                    <strong>Aisance à l'oral :</strong> je suis à l'aise avec la
                    parole et la communication devant un public.
                  </li>
                  <li>
                    <strong>Curiosité :</strong> je n'hésite pas à me renseigner
                    par moi-même et chercher les informations de manière
                    autonome.
                  </li>
                  <li>
                    <strong>Adaptabilité :</strong> J'arrive à m'adapté facile à
                    mon environnement de travail.
                  </li>
                  <li>
                    <strong>Intélligence émotionnelle :</strong> le travail en
                    équipe m'a permis d'adapté ma communication à mon
                    interlocuteur afin de transmettre un message de manière
                    claire et concis.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Profil;
