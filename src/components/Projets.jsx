import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjetCards from "./ProjetCards";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";

function Projets() {
  const projects_1 = [
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg1,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg1,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg1,
    },
  ];
  const projects_2 = [
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg2,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg2,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg2,
    },
  ];
  const projects_3 = [
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg3,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg3,
    },
    {
      title: "azerty",
      description: "azerty",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>{`<Projets/>`}</h2>

            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects_1.map((project, index) => {
                      return (
                        <ProjetCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects_2.map((project, index) => {
                      return (
                        <ProjetCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects_3.map((project, index) => {
                      return (
                        <ProjetCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-rigth" src={" "} alt="" />
    </section>
  );
}

export default Projets;
