import React from "react"
import InstaWidget from "./instaWidget"
import Bio from "./bio"

const Footer = () => {

  return (
    <footer className="bg-pink-300 w-screen h-full py-10 text-gray-100">
      <section className="container mx-auto">
        <Bio />
        <h2 className="text-2xl text-white font-serif my-5 border-b-2 border-pink-200">Sígueme en Instagram</h2>
        <InstaWidget />
        © {new Date().getFullYear()}, Hecho con
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> y <a href="https://ghost.org/" target="_blank">Ghost</a>
      </section>
    </footer>
  )
}

export default Footer
