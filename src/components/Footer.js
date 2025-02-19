import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Grupo GN</h1>
          <p>Construyendo espacios y soluciones a tu medida.</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTittle>Contactanos</FooterLinkTittle>
          <FooterLink to="/Contacto">Contacto</FooterLink>
          <FooterLink to="/Contacto">Soporte</FooterLink>
          <FooterLink to="/Contacto">Cotizaciones</FooterLink>
          <FooterLink to="/Contacto">Ubicaciones</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTittle>Productos</FooterLinkTittle>
          <FooterLink to="/Materiales">Materiales de Construccion</FooterLink>
          <FooterLink to="/Materiales">Accesorios para el Hogar</FooterLink>
          <FooterLink to="/Materiales">Proximos Productos</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTittle>Redes Sociales</FooterLinkTittle>
          <FooterLink to="/">WhatsApp</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">TikTok</FooterLink>
          <FooterLink to="/">Instagram</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTittle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3 ease-out;
  }
`
