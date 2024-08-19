import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const screenScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", screenScrolled);

    return () => window.removeEventListener("scroll", screenScrolled);
  }, []);

  const onUpdatedActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="public/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#profil"
              className={
                activeLink === "apropos" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("apropos")}
            >
              A propos
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "competences"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("competences")}
            >
              Compétences
            </Nav.Link>
            <Nav.Link
              href="#career"
              className={
                activeLink === "parcours" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("parcours")}
            >
              Parcours
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projets" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("projets")}
            >
              Projets
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/ErikaPierre?tab=repositories">
                <img src="public/github_logo.png" alt="GitHub logo" />
              </a>
              <a href="https://www.linkedin.com/in/erika-pierre-676b57136/">
                <img src="public/linkedin.png" alt="LinkedIn logo" />
              </a>
            </div>
            <button
              className="#"
              id="contact"
              onClick={() => console.log("contacté")}
            >
              <span className="">Contactez-moi</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
