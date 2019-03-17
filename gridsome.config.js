module.exports = {
  siteName: 'Loke Carlsson',
  siteUrl: 'https://www.lokecarlsson.se',
  titleTemplate: '%s - Portfolio & Blog',
  siteDescription: 'Web developer',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-8',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'ProjectPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'journal/**/*.md',
        typeName: 'JournalPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
};
