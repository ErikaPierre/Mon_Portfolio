function Footer() {
  return (
    <section>
      <div className="footer">
        <div className="footer-img">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="footer-infos">
          <span>Erika PIERRE © 2024</span> <br />
          <span>Tous droits réservés</span>
        </div>
        <div className="footer-reseaux">
          <div className="social-icon">
            <a href="https://github.com/ErikaPierre?tab=repositories">
              <img src="src/assets/github_logo.png" alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/erika-pierre-676b57136/">
              <img src="src/assets/linkedin.png" alt="LinkedIn logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
