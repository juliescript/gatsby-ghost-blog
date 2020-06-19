import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => {

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
    <header className="bg-pink-100 w-screen">
      <nav className="flex flex-row flex-no-wrap justify-start space-x-10 mx-10">
        <li className="text-gray-600 uppercase h-10 self-stretch leading-10 list-none" key={siteTitle}>
          <Link
            to="/"
          >
            Inicio
          </Link>
        </li>
        {
          pages.map(({node}) => (
            <li className="text-gray-600 uppercase h-10 self-stretch leading-10 list-none" key={node.id}>
              <Link
                to={`/${node.slug}/`}
              >
                {node.title}
              </Link>
            </li>
          )
          )
        }
       
      </nav>
    </header>
  )
}

export default Header
