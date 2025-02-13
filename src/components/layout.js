import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
