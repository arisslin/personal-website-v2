module.exports = {
  siteMetadata: {
    description: 'This is the personal webiste of Andreas Rissling.',
    siteUrl: 'https://www.gueteklasse-a.de',
    title: 'Güteklasse A',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets',
      },
      __key: 'assets',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andreas Rissling',
        short_name: 'AR',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/assets/icons/favicon-96x96.gif',
      },
    },
  ],
};
