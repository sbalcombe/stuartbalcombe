module.exports = {
  siteMetadata: {
    title: 'Stuart Balcombe',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'gatsby-tailwind-emotion-starter',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WFNHNHQ",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b', // see instructions section below
      },
    },
    {
      // location of your blog posts
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}