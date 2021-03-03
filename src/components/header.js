import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => {
  const pageQuery = useStaticQuery(graphql`
    query {
      ghostSettings {
        navigation {
          label
          url
        }
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `)

  const pages = pageQuery.ghostSettings.navigation
  const twitter = pageQuery.twitter.publicURL
  const github = pageQuery.github.publicURL

  return (
    <header className="bg-pink-100 w-full flex justify-between">
      <nav className="flex flex-row flex-no-wrap justify-start space-x-10 mx-10">
        <li
          className="text-gray-600 uppercase h-10 self-stretch leading-10 list-none"
          key={siteTitle}
        >
          <Link to="/">Inicio</Link>
        </li>
        {pages.map(nav => (
          <li
            className="text-gray-600 uppercase h-10 self-stretch leading-10 list-none"
            key={nav.label}
          >
            <Link to={`${nav.url}`}>{nav.label}</Link>
          </li>
        ))}
      </nav>
      <ul className="flex justify-around content-center items-center">
        <li className="mx-2 h-6 w-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
            href={`https://twitter.com/juliescriptdev`}
          >
            <img className="object-cover" src={twitter} alt="Twitter" />
          </a>
        </li>
        <li className="mx-2 h-6 w-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full"
            href={`https://github.com/juliescript`}
          >
            <img className="object-cover" src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
