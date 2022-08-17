module.exports = {
  siteMetadata: {
    title: `Family Vision`,
    description: `Family Vision Website`,
    author: `@gatsbyjs`,
    // TODO(teddywilson): Replace this.
    siteUrl: `https://google.com/`,
  },
  plugins: [
    `gatsby-transformer-csv`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/black-square.png`,
      },
    },
  ],
}
