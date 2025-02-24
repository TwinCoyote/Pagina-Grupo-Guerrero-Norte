import React from "react"
import "./Contacto.css"

const Contacto1 = () => {
  return (
    <section className="contact" id="contacto1">
      <div className="content">
        <h2>Contáctanos</h2>
        <p>Estemos en contacto, estamos aquí para ayudarte.</p>
      </div>

      <div className="container11">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">📍</div>
            <div className="text">
              <h3>Dirección</h3>
              <p>
                calle manzanos <br /> Saltillo, Coahuila, 2345
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">📞</div>
            <div className="text">
              <h3>Teléfono</h3>
              <p>844 3434 233</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">📧</div>
            <div className="text">
              <h3>Correo</h3>
              <p>contacto@grupogn.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form action="https://formspree.io/f/xbldvyje" method="POST">
            <h2>Enviar Mensaje</h2>

            <div class="inputBox">
              <input type="text" name="nombre" required />
              <span>Nombre Completo</span>
            </div>
            <div class="inputBox">
              <input type="email" name="correo" required />
              <span>Correo</span>
            </div>
            <div class="inputBox">
              <textarea name="mensaje" required></textarea>
              <span>Escriba su Mensaje...</span>
            </div>

            <div class="inputBox">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto1
