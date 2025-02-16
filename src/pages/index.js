import * as React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
