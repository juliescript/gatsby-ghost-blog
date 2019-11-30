/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
    className="bio"
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Escrito por <strong>{author}</strong>, una ingeniero en software mexicana que vive en Berlín. Me gusta programar, el maquillaje, la repostería y los ejercicios de ballet.
        <br /> <br />
        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {` `}|{` `}
        <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${social.instagram}`}>
          Instagram
        </a>
        {` `}|{` `}
        <a target="_blank" rel="noopener noreferrer" href={`https://github.com/${social.github}`}>
          GitHub
        </a>
      </p>
    </div>
  )
}

export default Bio
