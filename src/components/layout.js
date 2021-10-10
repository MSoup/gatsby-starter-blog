import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/Navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <section>
      <Navbar />
      <h1 className="main-heading">
        {title}
      </h1>
      </section>
    )
  } else {
    header = (
      <section>
        <Navbar/>
      {/* <Link className="header-link-home" to="/">
        {title}
      </Link> */}
      </section>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>, time, and love.
      </footer>
    </div>
  )
}

export default Layout
