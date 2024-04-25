// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Husky Coding Project',
  tagline: 'Let\'s Git Good',
  url: 'https://docs.hcp-uw.com',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hcp-uw', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Husky Coding Project',
        logo: {
          alt: 'My Site Logo',
          src: 'img/clubwebsite.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'club-leadership/lead-intro',
            position: 'left',
            label: 'Club Leadership Docs',
          },
          {
            type: 'doc',
            docId: 'project-team/project-intro',
            position: 'left',
            label: 'Project Team Docs',
          },
          {
            type: 'doc',
            docId: 'tech/tech-intro',
            position: 'left',
            label: 'Tech Resources',
          },

          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/nith2001/DocusaurusTesting',
          //   label: 'GitHub',
          //   position: 'right',
          // },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Club Leadership Docs',
                to: 'club-leadership/lead-intro',
              },
              {
                label: 'Project Team Docs',
                to: 'project-team/project-intro',
              },
              {
                label: 'Tech Resources',
                to: 'tech/tech-intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Organization',
                href: 'https://github.com/hcp-uw',
              },
              {
                label: 'Club Website',
                href: 'https://hcp-uw.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/hcp-uw',
              },
            ],
          },/*
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Husky Coding Project, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
