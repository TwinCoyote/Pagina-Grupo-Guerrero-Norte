import * as React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Nuestros Servicios" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
