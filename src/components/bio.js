/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div className="bio">
      <div className="bio__frame">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="bio__image"
        />
        <p className="bio__text">
          Escrito por <strong>{author}</strong>, una ingeniero en software
          mexicana que vive en Berlín. Me gusta programar, el maquillaje, la
          repostería y los ejercicios de ballet.
        </p>
      </div>
    </div>
  )
}

export default Bio
