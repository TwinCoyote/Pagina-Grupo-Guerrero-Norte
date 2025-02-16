import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header1 from "./Header"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header1 />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
