import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjetCards from "./ProjetCards";
import projImg1_Cab from "../assets/cabinet.png";
import projImg1_Cal from "../assets/calculator.png";
import projImg1_Self from "../assets/selfcare.png";
import projImg1_Todo from "../assets/todo.png";
// import projImg2 from "../assets/calculator.png";
import projImg3_Cop from "../assets/cop.png";

function Projets() {
  const projects_1 = [
    {
      title: "Cabinet Sage-Femme",
      description: "WordPress",
      imgUrl: projImg1_Cab,
      repoUrl: "https://sage-femme-echographiste-theo-lemouton.fr/",
    },
    {
      title: "Calculatrice",
      description: "HTML-CSS-JS",
      imgUrl: projImg1_Cal,
      repoUrl: "https://github.com/ErikaPierre/Calculator_JS",
    },
    {
      title: "Self-Care Center",
      description: "HTML-CSS-JS",
      imgUrl: projImg1_Self,
      repoUrl: "https://github.com/ErikaPierre/Self-Care-Center",
    },
    {
      title: "Todo List",
      description: "HTML-CSS-JS + CRUD",
      imgUrl: projImg1_Todo,
      repoUrl: "https://github.com/ErikaPierre/ToDoList_JS",
    },
  ];
  // const projects_2 = [
  //   {
  //     title: "Self-Care Center",
  //     description: "azerty",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "azerty",
  //     description: "azerty",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "azerty",
  //     description: "azerty",
  //     imgUrl: projImg2,
  //   },
  // ];
  const projects_3 = [
    {
      title: "CopOrPass",
      description: "MERN",
      imgUrl: projImg3_Cop,
      repoUrl: "https://github.com/ErikaPierre/CopOrPass_BACK",
    },
    // {
    //   title: "Spotify",
    //   description: "MERN",
    //   imgUrl: projImg3_Cop,
    //   repoUrl: "https://github.com/ErikaPierre/Spotify-API-back",
    // },
    // {
    //   title: "azerty",
    //   description: "azerty",
    //   imgUrl: projImg3_Cop,
    //   repoUrl: "https://sage-femme-echographiste-theo-lemouton.fr/",
    // },
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
                  <Nav.Link eventKey="first">Front</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="second">Back</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="third">Fullstack</Nav.Link>
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
                          repoUrl={project.repoUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
                  <Row>
                    {projects_2.map((project, index) => {
                      return (
                        <ProjetCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          repoUrl={project.repoUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane> */}
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects_3.map((project, index) => {
                      return (
                        <ProjetCards
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          repoUrl={project.repoUrl}
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
