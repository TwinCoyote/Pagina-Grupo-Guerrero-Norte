import React, { useState } from "react"
import { departamentos } from "../data/Carrusel"
import styled from "styled-components"
import Slider from "react-slick"

const Departamentos = () => {
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null)

  const abrirDetalles = departamento => {
    setDepartamentoSeleccionado(departamento)
  }

  const cerrarDetalles = () => {
    setDepartamentoSeleccionado(null)
  }

  return (
    <Container>
      {departamentos.map(depto => (
        <DepartamentoCard key={depto.id} onClick={() => abrirDetalles(depto)}>
          <Imagen src={depto.imagen} alt={depto.nombre} />
          <Descripcion>
            <h3>{depto.nombre}</h3>
            <p>{depto.descripcionCorta}</p>
          </Descripcion>
        </DepartamentoCard>
      ))}

      {departamentoSeleccionado && (
        <ModalOverlay onClick={cerrarDetalles}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CarruselContainer>
              <Slider arrows={true} dots={true}>
                {departamentoSeleccionado.fotos.map((foto, index) => (
                  <div key={index}>
                    <ImagenGrande src={foto} alt={`Foto ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </CarruselContainer>
            <InfoContainer>
              <h2>{departamentoSeleccionado.nombre}</h2>
              <p>
                <strong>Ubicación:</strong> {departamentoSeleccionado.ubicacion}
              </p>
              <p>{departamentoSeleccionado.descripcionLarga}</p>
              <CerrarBtn onClick={cerrarDetalles}>Cerrar</CerrarBtn>
            </InfoContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default Departamentos

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const DepartamentoCard = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`

const Imagen = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 12px;
`

const Descripcion = styled.div`
  display: flex;
  flex-direction: column;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalContent = styled.div`
  background: white;
  display: flex;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  overflow: hidden;
`

const CarruselContainer = styled.div`
  flex: 1;
  background: #f0f0f0;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
`

const ImagenGrande = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CerrarBtn = styled.button`
  margin-top: 12px;
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
`
