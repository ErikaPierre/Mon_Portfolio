import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import headerImg from "../assets/bricks.png";

function Banner() {
  const [message, setMessage] = useState("");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);
  const toRotate = ["Erika PIERRE", "une développeuse Web"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [message]);

  const tick = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, message.length - 1)
      : fullText.substring(0, message.length + 1);

    setMessage(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
      setDelta(200);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Bienvenue sur mon portfolio</span>
              <h1>
                {`Bonjour à tous !`} <br />
                {`Je suis `}
                <span className="wrap">{message}</span>
              </h1>
              <p>
                Si j’avais pu être une méthode JavaScript, je serais .map() car
                j'apporte toujours une nouvelle perspective et améliore chaque
                projet sur lequel je travaille.
              </p>
              <button
                // onClick={() => window.open("../public/CV-ErikaPIERRE.pdf")}
                id="cv"
              >
                <a href="../public/CV-ErikaPIERRE.pdf" download>
                  Téléchargez mon CV <FaAngleRight />
                </a>
              </button>
            </Col>
            <Col className="banner-img" xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
