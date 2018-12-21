const path = require('path')

// prettier-ignore
module.exports = {
  siteMetadata: {
    title: 'Alltrade Properties',
    phone: '(502) 562-1985',
    email: 'info@alltradeproperties.com',
    menu: [
        {
          label: "Home",
          url: '/',
          sub: [
            {label: "Old Louisville", url: "/officePages/old_louisville"},
            {label: "South End", url: "/officePages/south_end/"},
            {label: "Lexington Region", url: "/officePages/lexington/"},
          ]
        },
        {
          label: "Listings",
          url: '/listing',
          sub: [
            {label: "Residential Selection Guidelines", url: "/resident-selection"},
          ]
        },
        { label: 'Offices', url: '/offices'},
        { label: 'Company', url: '/company'},
        { label: 'Residents', url: '/residents'},
        { label: 'Owners', url: '/owners'},
        { label: 'Contact', url: '/contact'},
      ]
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          path.resolve(__dirname, 'src/styles'),
          path.resolve(__dirname, 'node_modules/coffeekraken-gridle'),
          path.resolve(__dirname, 'node_modules/'),
        ],
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
