import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Header from "./Header.js"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
