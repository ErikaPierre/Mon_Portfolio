import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col>
            <div className="contact-text">
              <span>Contactez-moi !</span>
              <p>
                Je suis actuellement à la recherche d'une alternance, pour les
                postes suivants :
              </p>
              <ul>
                <li>Intégratrice web</li>
                <li>Développeuse web JavaScript (React)</li>
                <li>Conceptrice Developpeuse d'Application</li>
              </ul>
            </div>
            <div className="contact-infos">
              <div className="contact-item contact-num">
                <FaPhoneAlt />
                <p>+33 6 26 26 50 77</p>
              </div>
              <div className="contact-item contact-email">
                <FaEnvelope />
                <p>pierre.erika@hotmail.fr</p>
              </div>
              <div className="contact-item contact-meet">
                <FaUserFriends />
                <p>
                  <strong>Vous souhaitez me rencontrer ?</strong>
                </p>
                <p>
                  Je suis disponible à <strong>Paris</strong> et ses alentours
                  avec une <strong>mobilité nationale</strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
