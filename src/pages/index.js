import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {
        posts.map( ({ node }) => (
          <div key={node.id}>
            <h2><Link to={`/${node.slug}/`}>{node.title}</Link></h2>
          </div>
        ))
      }
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
      allGhostPost {
        edges {
          node {
            id
            feature_image
            slug
            title
            created_at
          }
        }
      }
    }  
`
