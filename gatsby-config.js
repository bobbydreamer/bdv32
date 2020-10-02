require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `bobby_dreamer`,    
    siteTitleAlt: `BobbyDreamer - Works of Sushanth Bobby Lloyds`,
    siteHeadline: `Personal website of Sushanth Bobby Lloyds`,
    siteUrl: `https://www.bobbydreamer.com`,
    siteDescription: `Sushanth Bobby Lloyds. Programming. Games. Music. Videos. Resume. Experiments.`,
    author: `Sushanth Bobby Lloyds`,    
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `about_me`,
            slug: `/bio`,
          },          
          {
            title: `blog`,
            slug: `/blog`,
          },
          {
            title: `T.I.L`,
            slug: `/til`,
          },
          {
            title: `music`,
            slug: `/music`,
          },
          {
            title: `iRevere`,
            slug: `/irevere`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/bobbydreamer`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/sushanth-bobby-lloyds/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160722747-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BobbyDreamer - Works of Sushanth Bobby Lloyds`,
        short_name: `bobby|dreamer`,
        description: `Sushanth Bobby Lloyds. Programming. Games. Music. Videos. Resume. Experiments.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0ec46c`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-32x32`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
