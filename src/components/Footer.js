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
          <FooterLinkTittle>Servicios</FooterLinkTittle>
          <FooterLink to="/Servicios">Materiales de Construccion</FooterLink>
          <FooterLink to="/Servicios">Accesorios para el Hogar</FooterLink>
          <FooterLink to="/Servicios">Mas Servicios</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTittle>Redes Sociales</FooterLinkTittle>
          <FooterLink href="https://wa.me/8443711982" target="_blank">
            WhatsApp
          </FooterLink>
          <FooterLink
            href="https://www.facebook.com/profile.php?id=61573192391389"
            target="_blank"
          >
            Facebook
          </FooterLink>
          <FooterLink
            href="https://www.tiktok.com/@grupoguerreronorte"
            target="_blank"
          >
            TikTok
          </FooterLink>

          <FooterLink href="https://x.com/GGuerrero_Norte" target="_blank">
            Twitter
          </FooterLink>
          <FooterLink href="https://www.airbnb.mx/" target="_blank">
            Airbnb
          </FooterLink>
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
