module.exports = {
  siteMetadata: {
    title: 'MAPLE Beta',
    author: 'Josh Seltzer',
    description: 'MAPLE Beta - Intercultural Skills Lab',
    url: 'https://interculturalskillslab.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Meerus_nobg_small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/assets/fonts/`
      }
    }
  ],
}
