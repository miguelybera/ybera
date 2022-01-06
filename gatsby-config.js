module.exports = {
  siteMetadata: {
    title: "Spider-man website",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name: 'blog',
        path: `${__dirname}/blog`
      }
    }    
  ],
};
