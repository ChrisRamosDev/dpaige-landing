module.exports = {
  siteMetadata: {
    title: `Demica Paige Onine Personal Training`,
    description: `Reach your goals with Online personal training from Demica Paige`,
    siteUrl: "https://www.demicapaige.com",
    author: `@crash7114`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://www.demicapaige.com/graphql`,
        verbose: true,
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
