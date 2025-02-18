import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Departamentos from "../components/Departamentos"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Departamentos />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
