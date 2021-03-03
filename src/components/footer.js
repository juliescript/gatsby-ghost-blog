import React from "react"
import Bio from "./bio"

const Footer = () => {
  return (
    <footer className="bg-pink-300 w-full h-full py-10 text-gray-100">
      <section className="container mx-auto w-9/12">
        <Bio />
        
        <section className="flex justify-between my-2 font-serif">
          <div>
            © {new Date().getFullYear()}, Hecho con
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
              Gatsby
            </a>{" "}
            y{" "}
            <a href="https://ghost.org/" target="_blank" rel="noreferrer">
              Ghost
            </a>
          </div>
          <div>
            <a href="https://juliescript.dev/rss">RSS Feed</a>
          </div>
        </section>
        
      </section>
    </footer>
  )
}

export default Footer
