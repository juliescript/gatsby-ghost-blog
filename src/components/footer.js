import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => {

  const pageQuery = useStaticQuery(graphql`
    query {
      allGhostPage {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  const pages = pageQuery.allGhostPage.edges

  return (
    <footer className="bg-pink-300 w-screen h-10 py-10 text-gray-100">
      <section className="container mx-auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </section>
    </footer>
  )
}

export default Footer
