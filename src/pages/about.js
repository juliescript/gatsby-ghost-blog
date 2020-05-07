import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.scss"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Sobre Julieta Campos" />
        <article className="blog-post">
          <header>
            <h1>¡Hola!</h1>
          </header>
          <section>
            <img
              src={data.fileName.childImageSharp.fluid.src}
              alt="Julieta en la Laguna Azul de Islandia"
            />
            <p>
              Soy Julieta y escribo este blog. Soy mexicana y hace 3 años que
              vivo en Berlín, Alemania. Me dedico a escribir software para una
              compañía sueca y en mi tiempo libre hago postres e intento
              aprender a pintar con acuarelas.
            </p>

            <p>
              Empecé a escribir código a los 11 años cuando mi papá me enseño a
              usar HTML para modificar páginas. Después de muchos años terminé
              estudiando Ingeniería en Sistemas y a dedicarme a hacer sitios y
              aplicaciones web.
            </p>

            <p>
              Mi stack actual es: Javascript con Angular, no AngularJS, SASS y
              GraphQL. Este blog está hecho con GatsbyJS y pasé mucho tiempo
              intentando cambiar el estilo hasta que me deshice de todo e hice
              mis estilos con puro CSS con SASS.
            </p>

            <p>
              Me encuentras en{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}
              >
                Instagram
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${data.site.siteMetadata.social.twitter}`}
              >
                Twitter
              </a>
              y{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${data.site.siteMetadata.social.github}`}
              >
                GitHub
              </a>
              . Aunque te aviso que casi nunca hablo sobre código en mis redes y
              mi GitHub está lleno de forks.
            </p>
          </section>
        </article>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    fileName: file(relativePath: { eq: "julie_laguna_azul.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          instagram
          twitter
          github
        }
      }
    }
  }
`
