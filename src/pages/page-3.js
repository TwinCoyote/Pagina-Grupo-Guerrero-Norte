import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Card, Modal, Carousel } from "react-bootstrap"
import departamentosData from "../data/departamentos.json" // Importar los datos del JSON

const DepartamentosList = ({ data }) => {
  const [selectedDepartamento, setSelectedDepartamento] = React.useState(null)
  const [showModal, setShowModal] = React.useState(false)

  // Función para abrir el modal
  const openModal = departamento => {
    setSelectedDepartamento(departamento)
    setShowModal(true)
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false)
    setSelectedDepartamento(null)
  }

  return (
    <>
      <Container>
        <Row className="g-4">
          {/* Mostrar todas las cartas de departamentos */}
          {data.departamentos.edges.map(({ node }) => {
            // Encuentra los datos del departamento en el JSON
            const departamento = departamentosData.find(
              depto => depto.id === node.base.split(".")[0]
            )

            return (
              <Col key={node.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  className="shadow-sm rounded overflow-hidden"
                  onClick={() => openModal(departamento)}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    {node.childImageSharp ? (
                      <Img
                        fluid={node.childImageSharp.fluid}
                        alt={node.base.split("_").join(" ").split(".")[0]}
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

      {/* Modal con Carrusel */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size="xl" // Tamaño por defecto en pantallas grandes
        centered
        className="custom-modal" // Clase personalizada para mayor control de estilo
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDepartamento?.titulo || "Departamento"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex flex-column flex-lg-row">
            {/* Carrusel en la parte superior en móviles */}
            <div
              className="carousel-container"
              style={{ marginBottom: "20px" }}
            >
              <Carousel
                interval={3000}
                controls={true}
                indicators={true}
                className="w-100"
              >
                {/* Mostrar las imágenes del departamento en el carrusel */}
                {data.departamentos.edges
                  .filter(({ node }) => node.base.startsWith("depa")) // Filtra las imágenes por prefijo
                  .map(({ node }) => (
                    <Carousel.Item key={node.id}>
                      <Img
                        fluid={node.childImageSharp?.fluid} // Verifica que 'childImageSharp' existe
                        alt={`Imagen del departamento ${node.base}`}
                        style={{
                          height: "auto", // Asegura que la altura sea automática
                          width: "100%", // Asegura que las imágenes tengan el 100% de ancho
                          objectFit: "contain", // Evita que las imágenes se recorten
                          objectPosition: "center", // Asegura que la imagen esté centrada
                        }}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            {/* Detalles del departamento */}
            <div className="info-container" style={{ flex: 1 }}>
              <h4>Descripción</h4>
              <p>
                {selectedDepartamento?.descripcion ||
                  "Descripción del departamento"}
              </p>
              <h5>Ubicación</h5>
              <p>
                {selectedDepartamento?.ubicacion ||
                  "Ubicación del departamento"}
              </p>
              <h5>Teléfono</h5>
              <p>
                {selectedDepartamento?.telefono || "Teléfono del departamento"}
              </p>
              <h5>Detalles</h5>
              <p>
                {selectedDepartamento?.detalles || "Detalles del departamento"}
              </p>
            </div>
          </Container>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        /* Estilo para dispositivos móviles */
        @media (max-width: 768px) {
          .carousel-container {
            margin-bottom: 20px;
            width: 100%;
            height: 300px; /* Aumenta la altura del carrusel en móviles */
          }

          .carousel-item img {
            width: 100%;
            height: 100%; /* Asegura que las imágenes ocupen todo el alto disponible */
            object-fit: contain; /* Asegura que las imágenes no se recorten */
            object-position: center center; /* Asegura que la imagen esté centrada */
          }

          /* Coloca el carrusel arriba y la información abajo */
          .info-container {
            width: 100%;
          }
        }

        /* Estilo para pantallas grandes (tabletas y escritorios) */
        @media (min-width: 769px) {
          .carousel-container {
            flex: 1;
            margin-right: 20px;
            height: 500px;
          }

          .carousel-item img {
            height: 100%;
            width: 100%;
            object-fit: cover; /* Asegura que las imágenes se ajusten sin distorsionarse */
          }

          .info-container {
            flex: 1;
          }
        }

        /* Estilo para pantallas grandes (laptops) */
        @media (min-width: 1024px) {
          .custom-modal .modal-dialog {
            max-width: 90%; /* Aumenta el tamaño del modal en pantallas grandes */
            width: 80%;
          }

          .carousel-container {
            height: 500px; /* Tamaño mayor para el carrusel */
          }
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
