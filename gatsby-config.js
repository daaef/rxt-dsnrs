module.exports = {
  siteMetadata: {
    title: `React 4 Designers Website`,
    description: `A tutorial that gave me more insight into animations and design as a whole. I owe You a lot Meng.`,
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after' +
      ' effects, create sketch plugin',
    author: `@daaef`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'oi35li0o6e5v',
        accessToken: '1d13c6d563f5872adaee3fffbf9712169c111cbe74ee94ab66028959b6c71c1a'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
