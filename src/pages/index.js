import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.edges
  const site = data.ghostSettings

  return (
    <Layout>
      <SEO title="Inicio" />
      <section className="my-10">
        <h1 className="text-5xl uppercase font-hairline text-center text-gray-600 font-serif">{site.title}</h1>
        <p className="text-xs uppercase font-hairline text-center text-gray-600 font-sans tracking-widest">{site.description}</p>
      </section>
      <section className="grid grid-cols-3 grid-flow-row gap-8 my-10">
      {
        posts.map( ({ node }) => (
          <article className="col-auto border-pink-200 border-4 p-5" key={node.id}>
            <ul className="flex justify-start space-x-2 flex-wrap my-2">
              {
                node.tags.map(({name, id}) => (
                <li className="flex-none bg-pink-100 text-gray-500 text-xs uppercase block px-1 rounded-sm" key={id}>{name}</li>
                ))
              }
            </ul>

            <p className="text-xs font-hairline font-sans text-gray-500 uppercase mt-5 tracking-widest">{ node.published_at }</p>
            <h2 className="text-xl font-hairline text-gray-600 font-serif mb-5"><Link to={`/${node.slug}/`}>{node.title}</Link></h2>
            <p className="text-base font-hairline font-sans text-gray-700">
              {node.excerpt}
            </p>
          </article>
        ))
      }
      </section>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    allGhostPost(sort: {fields: published_at, order: DESC}, filter: {title: {ne: "Data schema"}}) {
        edges {
          node {
            id
            feature_image
            slug
            title
            published_at(formatString: "DD.MM.YYYY")
            excerpt
            tags {
              name
              id
            }
          }
        }
      }
      ghostSettings {
        description
        title
      }
    }  
`
