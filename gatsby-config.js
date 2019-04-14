module.exports = {
  siteMetadata: {
    title: "Aleksandar's Petrovic Portfolio",
    author: "Aleksandar Petrovic",
    description: "I'm a UX Researcher/Designer'"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Aleksandar's Petrovic Portfolio",
        short_name: "apetrovic",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#1d5866',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
