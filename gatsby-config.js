const autoprefixer = require(`autoprefixer`)
const mqPacker = require(`css-mqpacker`) // compresses media queries into a single query
const cssnano = require(`css-mqpacker`) // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://example.com`,
    title: `Starter gatsby w transition link`,
    description: `minimal starter with page transitions, SEO, manifest`,
    author: `@flowen_nl`,
    keywords: `this, that, thot`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter gatsby w transition link`,
        short_name: `short name`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/favicon/favicon-32x32.png`,
        include_favicon: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              `default`,
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Work+Sans:600,900`],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-137016115-1`,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //   },
    // },
  ],
}
