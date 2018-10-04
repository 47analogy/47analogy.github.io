//add plugins and static info
module.exports = {
  siteMetadata: {
    title: 'Tweed Portfolio',
    pathPrefix: `/47analogy.github.io`
  },

  plugins: [
    `gatsby-plugin-react-helmet`, // modifies head tags
    `gatsby-plugin-catch-links`, // avoids refresh and allow local links (i.e. non-react pages)
    `gatsby-plugin-sass`, // compiles scss
    // points to typography.js    
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    // sources data about files from cpu's file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    // transforms markdown to html
    `gatsby-transformer-remark`,
  ], // end plugins
};