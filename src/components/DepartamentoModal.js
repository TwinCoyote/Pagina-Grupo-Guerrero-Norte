// src/components/DepartamentoModal.js
import React from "react"
import { Modal, Carousel, Container } from "react-bootstrap"
import Img from "gatsby-image"

const DepartamentoModal = ({ show, onHide, departamento, images }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {departamento?.base.split("_").join(" ").split(".")[0]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex">
          <div style={{ flex: 1, marginRight: "20px" }}>
            <Carousel>
              {/* Carrusel con todas las imágenes del departamento */}
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt={`Imagen del departamento ${image.base}`}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div style={{ flex: 1 }}>
            <h4>Descripción</h4>
            <p>
              Descripción del departamento{" "}
              {departamento?.base.split("_").join(" ").split(".")[0]}
            </p>
            <h5>Ubicación</h5>
            <p>
              Ubicación de{" "}
              {departamento?.base.split("_").join(" ").split(".")[0]}
            </p>
            <h5>Teléfono</h5>
            <p>123-456-7890</p>
            <h5>Detalles</h5>
            <p>
              Este departamento cuenta con amplios espacios, excelente
              iluminación y una vista panorámica.
            </p>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default DepartamentoModal
