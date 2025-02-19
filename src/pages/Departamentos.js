import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Card, Modal, Carousel } from "react-bootstrap"
import departamentosData from "../data/departamentos.json"
import Layout from "../components/layout"
import HeroD from "../components/HeroDepa"

const DepartamentosList = ({ data }) => {
  const [selectedDepartamento, setSelectedDepartamento] = React.useState(null)
  const [showModal, setShowModal] = React.useState(false)

  const openModal = departamento => {
    setSelectedDepartamento(departamento)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedDepartamento(null)
  }

  return (
    <>
      <Layout>
        <HeroD />
        <h2
          className="text-center my-4 departamento-title"
          id="departamentos-list"
        >
          Nuestros Departamentos
        </h2>
        <Container>
          <Row className="g-4 justify-content-center">
            {data.departamentos.edges.map(({ node }) => {
              const departamento = departamentosData.find(
                depto => depto.id === node.base.split(".")[0]
              )

              return (
                <Col
                  key={node.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex"
                >
                  <Card
                    className="shadow-lg rounded overflow-hidden card-hover w-100"
                    onClick={() => openModal(departamento)}
                    style={{
                      cursor: "pointer",
                      marginTop: "20px",
                      marginBottom: "40px",
                    }}
                  >
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      {node.childImageSharp ? (
                        <Img
                          fluid={node.childImageSharp.fluid}
                          alt={node.base.split("_").join(" ").split(".")[0]}
                          style={{ height: "100%", objectFit: "cover" }}
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
                        {departamento?.titulo || "Título del Departamento"}
                      </Card.Title>
                      <Card.Text className="text-muted text-center">
                        {departamento?.descripcion ||
                          "Breve descripción del departamento."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Layout>

      <Modal
        show={showModal}
        onHide={closeModal}
        size="xl"
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDepartamento?.titulo || "Departamento"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className="carousel-container" id="col1">
              <Carousel interval={3000} controls indicators>
                {data.departamentos.edges
                  .filter(({ node }) => node.base.startsWith("depa"))
                  .map(({ node }) => (
                    <Carousel.Item key={node.id}>
                      <Img
                        fluid={node.childImageSharp?.fluid}
                        alt={node.base}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
            <Col md={6} className="details-container">
              <h4 className="mt-3">Descripción</h4>
              <p>
                {selectedDepartamento?.descripcion ||
                  "Descripción del departamento"}
              </p>
              <h5>Ubicación</h5>
              <p>
                {selectedDepartamento?.ubicacion || "Ubicación no disponible"}
              </p>
              <h5>Teléfono</h5>
              <p>
                {selectedDepartamento?.telefono || "Teléfono no disponible"}
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .departamento-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #343a40; /* Gris oscuro para un buen contraste */
          text-transform: uppercase; /* Para hacerlo más impactante */
          letter-spacing: 1px; /* Espaciado entre letras para darle un toque moderno */
          margin-top: 20px;
          margin-bottom: 40px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Un suave sombreado */
        }

        .departamento-title:hover {
          color: #007bff; /* Cambia de color al pasar el mouse */
          transition: color 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
        .card-hover {
          transition: transform 0.3s ease-in-out;
        }
        @media (max-width: 768px) {
          .carousel-container {
            height: 250px;
          }
          .carousel-container .carousel-item img {
            height: 250px;
            object-fit: cover;
          }
        }
        @media (min-width: 1224px) {
          .custom-modal .modal-dialog {
            max-width: 90%;
          }
        }
        .custom-modal .modal-body {
          max-height: 80vh;
          overflow-y: auto;
        }
      `}</style>
    </>
  )
}

export default DepartamentosList

export const query = graphql`
  query {
    departamentos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        name: { regex: "/^depa/" }
      }
      sort: { relativePath: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(
              maxWidth: 800
              maxHeight: 600
              fit: COVER
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
