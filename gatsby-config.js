module.exports = {
  siteMetadata: {
    siteUrl: 'https://sun-freeze-system.netlify.app',
    title: '태양냉동',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '296237596',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `sun freeze system`,
        short_name: `sun freeze`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#f7f0eb`,
        display: `standalone`,
        icon: `src/images/favicons/android-chrome-192x192.png`,
        icons: [
          {
            src: `src/images/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `192 x 192`,
          },
          {
            src: `src/images/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `512 x 512`,
          },
        ], // Add or remove icon sizes as desired
        cache_busting_mode: `none`, // `query`(default), `name`, or `none`
      },
    },
  ],
};