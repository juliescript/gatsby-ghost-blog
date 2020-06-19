import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
    const post = data.ghostPage
    return (
        <Layout>
            <SEO title={post.title} />
            <article className="container mx-auto juliescript-post">
                {post.feature_image ? (
                    <img src={post.feature_image} alt={post.title} />
                ) : null}
                <h1 className="text-5xl font-hairline text-center text-gray-600 font-serif my-10">{post.title}</h1>
                <section dangerouslySetInnerHTML={{__html: post.html}}></section>
            </article>
        </Layout>
    )
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            title
            slug
            feature_image
            html
        }
    }
`
