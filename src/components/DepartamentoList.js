// src/components/DepartamentosList.js
import React, { useState } from "react"
import { Container, Row } from "react-bootstrap"
import DepartamentoCard from "./DepartamentoCard"
import DepartamentoModal from "./DepartamentoModal"

const DepartamentosList = ({ data }) => {
  const [selectedDepartamento, setSelectedDepartamento] = useState(null)
  const [showModal, setShowModal] = useState(false)

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
      <Container>
        <Row className="g-4">
          {/* Mapeamos los departamentos para mostrar las tarjetas */}
          {data.departamentos.edges.map(({ node }) => (
            <DepartamentoCard
              key={node.id}
              departamento={node}
              onClick={() => openModal(node)}
            />
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <DepartamentoModal
        show={showModal}
        onHide={closeModal}
        departamento={selectedDepartamento}
        images={data.departamentos.edges.filter(({ node }) =>
          node.base.startsWith("depa")
        )}
      />
    </>
  )
}

export default DepartamentosList
