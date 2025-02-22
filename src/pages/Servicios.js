import React from "react"
import "../components/Sales.css"
import Layout from "../components/Layout1.js"
import HeroV from "../components/HeroVentas.js"
import imagen1 from "../assets/images/aluminio.jpg"
import imagen2 from "../assets/images/vidrios.jpeg"
import imagen3 from "../assets/images/canceles.jpeg"
import imagen4 from "../assets/images/domos.jpg"
import imagen5 from "../assets/images/palapas.jpg"
import imagen6 from "../assets/images/alambrin.jpg"
import imagen9 from "../assets/images/alambrinEX.jpg"
import imagen8 from "../assets/images/wpc.jpeg"
import imagen7 from "../assets/images/marmoleado.jpeg"

const services = [
  {
    id: 1,
    name: "Trabajos de aluminio para estructuras personalizadas",
    price: "Cotiza con Nosotros",
    imagen: imagen1,
  },
  {
    id: 2,
    name: "Instalación y mantenimiento de vidrios para diversos usos",
    price: "Cotiza con Nosotros",
    imagen: imagen2,
  },
  {
    id: 3,
    name: "Instalación de canceles de baño y divisiones de vidrio",
    price: "Cotiza con Nosotros",
    imagen: imagen3,
  },
  {
    id: 5,
    name: "Fabricación e instalación de domos para luz natural",
    price: "Cotiza con Nosotros",
    imagen: imagen4,
  },
  {
    id: 5,
    name: "Construcción de palapas para exteriores y jardines",
    price: "Cotiza con Nosotros",
    imagen: imagen5,
  },
  {
    id: 6,
    name: "Instalación de paneles WPC para fachadas y terrazas",
    price: "Cotiza con Nosotros",
    imagen: imagen6,
  },
  {
    id: 7,
    name: "Instalación de paneles de PVC marmoleado para interiores",
    price: "Cotiza con Nosotros",
    imagen: imagen7,
  },
  {
    id: 8,
    name: " Instalación de alambrín para divisiones y cercos interiores",
    price: "Cotiza con Nosotros",
    imagen: imagen8,
  },
  {
    id: 9,
    name: "Colocación de alambrín resistente para cercos exteriores y seguridad",
    price: "Cotiza con Nosotros",
    imagen: imagen9,
  },
]

const Sales = () => {
  return (
    <Layout>
      <HeroV />
      <section className="sales-section">
        <div className="container">
          <h2 className="title">Nuestros Servicios</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <img
                  src={service.imagen}
                  alt={service.name}
                  className="service-image"
                />
                <h3 className="service-name">{service.name}</h3>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Sales
