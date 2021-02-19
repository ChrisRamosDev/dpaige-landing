module.exports = {
  siteMetadata: {
    title: `Demica Paige Onine Personal Training`,
    description: `Reach your goals with Online personal training from Demica Paige`,
    author: `@crash7114`,
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
    {
      resolve: "gatsby-source-hubspot-forms",
      options: {
        apiKey: "5f73c4a8-1140-48e4-b66f-317966ca4e79",
      },
    },
  ],
}
