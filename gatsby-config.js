require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'NetByBit',
    description:
      'NetByBit is Freelancing Webpage, web design your Webpage, we develop professional sites and do prjects, fix bugs.find us on fiverr and upwork',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Audiowide',
          'open sans', // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-18396819-5',
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.CRISP_WEBSITE_ID,
        enableDuringDevelop: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // 'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify',
  ],
}
