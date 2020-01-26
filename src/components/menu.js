import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./menu.scss"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <nav className="menu">
      <ul className="menu__site-navigation">
        <li>
          <Link to={'/'}>inicio</Link>
        </li>
        <li>
          <Link to="about">sobre mí</Link>
        </li>
      </ul>
      <ul className="menu__social-media">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="menu__social-media--instagram"
            href={`https://instagram.com/${social.instagram}`}
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="menu__social-media--twitter"
            href={`https://twitter.com/${social.instagram}`}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="menu__social-media--github"
            href={`https://github.com/${social.instagram}`}
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
