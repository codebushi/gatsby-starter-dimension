module.exports = {
  siteMetadata: {
    title: 'Clement Tse',
    author: 'Clement Tse',
    description: 'Me in 10 seconds. Product leader in B2B SaaS companies, Strategic Advisor for Digital Transformations, Startup Founder, and Dad',
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
        icon: 'src/images/ct-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
