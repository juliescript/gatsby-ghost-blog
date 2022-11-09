const generateRSSFeed = require(`./src/utils/rss/generate-feed`)
const config = require(`./src/utils/siteConfig`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://api.juliescript.dev`,
        contentApiKey: `0be2bdc6c8a504a3e2e62bbfdc`,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
              allGhostSettings {
                  edges {
                      node {
                          title
                          description
                      }
                  }
              }
          }
        `,
        title: "Juliescript - otro blog de tecnología en español",
        feeds: [generateRSSFeed(config)],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-Z6P7F4D558`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["INSTAGRAM_TOKEN"],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://juliescript.dev`,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        // 2. - Ensure these only apply to type
        filter: node =>
          node.internal.type === `GhostPost` ||
          node.internal.type === `GhostPage`,
        plugins: [
          {
            // 3. - Add syntax highlight for code block.
            resolve: `gatsby-rehype-prismjs`,
          },
        ],
      },
    },
  ],
}
