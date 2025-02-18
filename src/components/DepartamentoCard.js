// src/components/DepartamentoCard.js
import React from "react"
import { Card, Col } from "react-bootstrap"
import Img from "gatsby-image"

const DepartamentoCard = ({ departamento, onClick }) => {
  return (
    <Col key={departamento.id} xs={12} sm={6} md={4} lg={3}>
      <Card
        className="shadow-sm rounded overflow-hidden"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <div style={{ height: "200px", overflow: "hidden" }}>
          {departamento.childImageSharp ? (
            <Img
              fluid={departamento.childImageSharp.fluid}
              alt={departamento.base.split("_").join(" ").split(".")[0]}
              style={{
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
          ) : (
            <div
              style={{
                height: "100%",
                backgroundColor: "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>Imagen no disponible</span>
            </div>
          )}
        </div>
        <Card.Body>
          <Card.Title className="text-center">
            {departamento.base.split("_").join(" ").split(".")[0]}
          </Card.Title>
          <Card.Text className="text-muted text-center">
            Breve descripción del departamento.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default DepartamentoCard
