module.exports = {
  siteMetadata: {
    title: `Dhruv Jain`,
    author: {
      name: `Dhruv Jain`,
    },
    description: `Dhruv Jain's Personal Blog and Portfolio`,
    siteUrl: `https://maddhruv.xyz`,
    social: {
      twitter: `maddhruv`,
      github: `maddhruv`,
    },
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
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
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
          {
            resolve: `gatsby-transform-link`,
            options: {
              suffix: "?ref=maddhruv",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168980967-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dhruv Jain`,
        short_name: `maddhruv`,
        start_url: `/`,
        background_color: "#2cb978",
        theme_color: "#83e85a",
        display: "standalone",
        icon: "content/assets/avatar-512.png",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
};
