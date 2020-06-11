const theme = require("./src/theme")

module.exports = {
  siteMetadata: {
    title: `Dhruv Jain`,
    author: {
      name: `Dhruv Jain`,
      summary: `Life is too Short`,
    },
    description: `Dhruv Jain's Personal Blog and Portfolio`,
    siteUrl: `https://maddhruv.xyz`,
    social: {
      twitter: `maddhruv`,
      github: `maddhruv`,
    },
    theme,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}//content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}//content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dhruv Jain`,
        short_name: `maddhruv`,
        start_url: `/`,
        background_color: theme.colors.secondary,
        theme_color: theme.colors.primary,
        display: "standalone",
        icon: "content/assets/avatar-32.png",
        icons: [
          {
            src: "/assets/avatar-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/assets/avatar-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/assets/avatar-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/assets/avatar-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/assets/avatar-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/assets/avatar-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
