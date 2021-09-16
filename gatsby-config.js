module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "purse_website",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
  ],
};
