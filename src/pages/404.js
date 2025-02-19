import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Proximamente...</h1>
    <p>
      Lo sentimos, la página que buscas no existe. Es posible que el enlace esté
      roto o que la página haya sido movida.
    </p>
    <p>¿Qué tal si intentas una de estas opciones?</p>

    <p>
      Si tienes problemas, no dudes en <Link to="/Contacto">contactarnos</Link>.
    </p>
  </Layout>
)

export const Head = () => <Seo title="404: Página no encontrada" />

export default NotFoundPage
