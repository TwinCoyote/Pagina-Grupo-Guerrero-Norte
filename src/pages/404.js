import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NotFoundPage1 from "../components/404"

const NotFoundPage = () => (
  <Layout>
    <NotFoundPage1 />
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
