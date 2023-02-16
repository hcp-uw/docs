// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Husky Coding Project',
  tagline: 'Let\'s Git Good',
  url: 'https://nith2001.github.io',
  baseUrl: '/hcp-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nith2001', // Usually your GitHub org/user name.
  projectName: 'hcp-documentation', // Usually your repo name.

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
            docId: 'project-team-docs/project-docs-intro',
            position: 'left',
            label: 'Project Team Documentation',
          },
          {
            type: 'doc',
            docId: 'club-lead-docs/lead-docs-intro',
            position: 'left',
            label: 'Leadership Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nith2001/DocusaurusTesting',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Leadership Docs',
                to: 'docs/club-lead-docs/lead-docs-intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Organization',
                href: 'https://github.com/Husky-Coding-Project',
              },
              {
                label: 'HuskyLink',
                href: 'https://huskylink.washington.edu/organization/hcp',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/husky-coding-project/mycompany/?viewAsMember=true',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
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
