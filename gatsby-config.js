const path = require('path')

// prettier-ignore
module.exports = {
  siteMetadata: {
    title: 'Alltrade Property Management',
    phone: '(502) 562-1985',
    email: 'info@alltradeproperties.com',
    description:  'A property management company based in Louisville, Kentucky. We managing single family, multifamily, and commercial spaces in Louisville, Lexington, Somerset, Durhan NC, and Southern Indiana',
    keywords: 'Property manamgement, Apartments, houses, commercial rentals, Kentucky, Louisville, Southern Indiana, Lexington, Durham',
    siteUrl: 'https://alltradeproperties.com',
    logoOg: 'https://alltradeproperties.com/logo_og.png',
    menu: [
        {
          label: "Home",
          url: '/',
          
        },
        {
          label: "Listings",
          url: '/listing',
          sub: [
            {label: "Old Louisville", url: "/officePages/old_louisville"},
            {label: "South End", url: "/officePages/south_end/"},
            {label: "Lexington Region", url: "/officePages/lexington/"},
            {label: "Highlands/Cherokee Triangle", url: "/officePages/highlands/"},
            {label: "Southern Indiana", url: "/officePages/southern_indiana/"},
          ]
        },
        { label: 'Offices', url: '/offices'},
        { label: 'Company', url: '/company', sub: [
          { label: 'Blog', url: '/blog'},
          { label: 'Careers', url: '/careers'},
        ]},
        { 
          label: 'Residents', 
          url: '/residents',
          sub: [
            {label: "Resident Selection Guidelines", url: "/resident-selection"},
          ]
      },
        { label: 'Owners', url: '/owners'},
        { label: 'Contact', url: '/contact'},
      ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          path.resolve(__dirname, 'src/styles'),
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118919384-2",
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '544831499376643',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
