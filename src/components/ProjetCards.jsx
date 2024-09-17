import React from "react";
import { Col } from "react-bootstrap";

function ProjetCards({ title, description, imgUrl, repoUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="projet-imgBox">
        <a href={repoUrl}>
          <img src={imgUrl} />
        </a>
        <div className="projet-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjetCards;
