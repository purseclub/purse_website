require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "The Purse Club",
    siteUrl: "https://www.thepurse.club",
    title: "purse_website",
    author: "Purse Club",
  },
  plugins: [
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-glslify`,
    `gatsby-plugin-polyfill-io`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-loadable-components-ssr`,
  ],
};
