import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/Hero"
import Trips from "../components/Trips"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
