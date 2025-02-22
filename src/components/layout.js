import * as React from "react"
import Footer from "./Footer"
import Header2 from "./header1"
import { GlobalStyles } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header2 />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
