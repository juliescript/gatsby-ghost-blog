import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
    const post = data.ghostPost
    return (
        <Layout>
            <SEO title={post.title} />
            <article className="container mx-auto juliescript-post">
                {post.feature_image ? (
                    <img src={post.feature_image} alt={post.title} />
                ) : null}
                <h1 className="text-5xl font-hairline text-center text-gray-600 font-serif mt-10">{post.title}</h1>
                <p className="text-xs font-hairline font-sans text-gray-500 uppercase mt-5 tracking-widest mb-10 text-center">{ post.published_at }</p>
                <section dangerouslySetInnerHTML={{__html: post.html}}></section>
            </article>
        </Layout>
    )
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            title
            slug
            feature_image
            html
            published_at(formatString: "DD.MM.YYYY")
        }
    }
`
