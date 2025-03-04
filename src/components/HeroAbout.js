import React from "react"
import styled from "styled-components"
import Video from "../assets/videos/About.mp4"

const HeroA = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Sobre Nosotros</HeroH1>
          <HeroP>
            En Grupo Guerrero del Norte, transformamos espacios con soluciones
            innovadoras en aluminio y vidrio, combinando calidad, diseño y
            funcionalidad para crear entornos excepcionales.
          </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroA

const HeroContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    cursor: default;
    pointer-events: none;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.3;
  font-weight: bold;
`

const HeroH1 = styled.div`
  font-size: clamp(2rem, 6vw, 4.5rem);
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  padding: 0 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`

const HeroP = styled.div`
  font-size: clamp(1.2rem, 2vw, 2rem);
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 600px;
`
