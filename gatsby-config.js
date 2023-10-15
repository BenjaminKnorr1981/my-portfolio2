/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://portfolio-of-benjamin-knorr.netlify.app`,
    description: `A overview of my capabilities in coding`,
    image:`src/images/profile.jpg`,
    twitterUsername:`@Bennie_Oni`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", `gatsby-plugin-fontawesome-css`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ['G-RSCXETRHW8']
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `skills`,
      "path": `${__dirname}/skills/`,
    },
    __key: "pages"
  }]
};