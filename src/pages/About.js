import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import AboutUs from "../components/AbautUS.js"
import HeroA from "../components/HeroAbout.js"

const SecondPage = () => (
  <Layout>
    <HeroA />
    <AboutUs />
  </Layout>
)

export default SecondPage
