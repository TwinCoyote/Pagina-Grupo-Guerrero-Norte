import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import Contacto1 from "../components/Contacto.js"
import HeroC from "../components/HeroContacto.js"

const SecondPage = () => (
  <Layout>
    <HeroC />
    <Contacto1 />
  </Layout>
)

export default SecondPage
