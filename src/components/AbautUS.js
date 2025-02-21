import React from "react"
import "./AboutUs.css"
import Image from "../assets/images/x.jpg"
import Quality from "../assets/images/QSVG.png"
import Compromiso from "../assets/images/CSVG.png"
import Inova from "../assets/images/INSVG.png"
import Integridad from "../assets/images/ISVG.png"

const AboutUs = () => {
  return (
    <section className="about-section1">
      <div className="container">
        {/* Introducción */}
        <h2 className="title">Sobre Nosotros</h2>
        <p className="description">
          En <span className="highlight">Grupo Guerrero del Norte</span>, nos
          especializamos en soluciones de aluminio y vidrio, proporcionando
          productos y servicios de alta calidad para proyectos residenciales,
          comerciales e industriales. También ofrecemos renta de departamentos
          modernos y confortables, asegurando la mejor experiencia para nuestros
          inquilinos.
        </p>
        <img src={Image} alt="Nuestros servicios" className="about-image" />

        {/* Misión y Visión */}
        <div className="grid">
          <div className="card12">
            <h3>Misión</h3>
            <p>
              Brindar soluciones innovadoras y de calidad en aluminio y vidrio,
              satisfaciendo las necesidades de nuestros clientes con diseños
              funcionales, materiales duraderos y un servicio excepcional.
            </p>
          </div>
          <div className="card12">
            <h3>Visión</h3>
            <p>
              Ser la empresa líder en soluciones de aluminio y vidrio en la
              región, reconocidos por nuestra calidad, innovación y compromiso
              con el cliente.
            </p>
          </div>
        </div>

        {/* Nuestros Valores Mejorados */}
        <div className="values">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-item">
              <img src={Quality} alt="Calidad" />
              <h4>Calidad</h4>
              <p>Materiales y acabados con los más al tos estándares.</p>
            </div>
            <div className="value-item">
              <img src={Compromiso} alt="Compromiso" />
              <h4>Compromiso</h4>
              <p>
                Atención personalizada y enfoque en la satisfacción del cliente.
              </p>
            </div>
            <div className="value-item">
              <img src={Inova} alt="Innovación" />
              <h4>Innovación</h4>
              <p>Soluciones modernas y eficientes para cada proyecto.</p>
            </div>
            <div className="value-item">
              <img src={Integridad} alt="Integridad" />
              <h4>Integridad</h4>
              <p>
                Transparencia y responsabilidad en cada uno de nuestros
                servicios.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de Contacto */}
        <div className="contact-button-container">
          <a href="/Contacto" className="contact-button">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
