/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      ghostSettings {
        title
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.ghostSettings.title}/>
      <main className="container mx-auto w-9/12">{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
