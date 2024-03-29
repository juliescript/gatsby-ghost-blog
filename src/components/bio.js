import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      ghostAuthor {
        bio
        name
        profile_image
        twitter
        website
      }
    }
  `)

  const author = pageQuery.ghostAuthor

  return (
    <section className="bg-pink-200 p-3">
      <div className="flex justify-around items-center content-center bg-white p-6 flex-col md:flex-row">
        <img
          className="h-32 w-32 rounded-full mx-auto flex-shrink-0 sm:mb-4 md:mr-10 lg:mr-10"
          src={author.profile_image}
          alt={author.name}
        />
        <div className="text-gray-700 text-xl  font-serif font-hairline">
          <p className="text-gray-700">
            {author.bio} Me encuentras como {author.twitter} en:
          </p>
          <ul className="flex justify-start">
            <li className="mr-6">
              <a
                href="https://twitter.com/juliescriptdev"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href={author.website} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Bio
