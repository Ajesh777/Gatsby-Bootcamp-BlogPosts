 /**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /** 31: config site MetaData */
  siteMetadata: {
    title: 'Full-Stack BootCamp!',
    author: 'AJ'
  },
  /** 30: config gatsby sass plugin below */
  plugins: [
    'gatsby-plugin-sass',
    /** 36: plugin for filesystem as an object for options*/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
    },
    /** 37: plugin for parsing filesystem 
    'gatsby-transformer-remark' * /
    /** 43: plugin for rendering images*/
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    /** 46: plugin for contentful cms */
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    /** 52: plugin for header - react-helmet */
    'gatsby-plugin-react-helmet'
  ]
}
