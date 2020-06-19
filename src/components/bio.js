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
        Written by <strong>{author}</strong>, a Mexican software Engineer based in Berlin. I like makeup, baking, ballet workouts, and coding.
        <br />
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
