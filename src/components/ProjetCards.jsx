import React from "react";
import { Col } from "react-bootstrap";

function ProjetCards({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="projet-imgBox">
        <img src={imgUrl} />
        <div className="projet-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjetCards;
