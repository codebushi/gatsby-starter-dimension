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
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-138587587-1", // Google Analytics ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared accross all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
      'gatsby-plugin-sass',
      'gatsby-plugin-offline'
  ],
}
