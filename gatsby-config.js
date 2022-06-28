module.exports = {
  siteMetadata: {
    title: "BUILD Nigeria",
    titleTemplate: "%s - BUILD Nigeria",
    description: "BUILD Nigeria is a non-profit and NGO that serves potential Nigerian pre-college students by aiming to democratize access to comprehensive and credible information for applying to world-class colleges and universities, including but not exclusive to US colleges.",
    url: "https://www.buildng.org", // No trailing slash allowed!
    siteUrl: "https://www.buildng.org", // No trailing slash allowed!
    image: "/images/icon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: ""
  },
  trailingSlash: 'never',
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-K8HJJ2F",
      includeInDevelopment: false,
    },
  },
  {
    resolve: "gatsby-plugin-sitemap",
    options: {
      excludes: ['/coming-soon']
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-anchor-links", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};