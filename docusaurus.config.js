// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio',
  tagline: 'Hardware and Software Info',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rayyan06.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rayyan06', // Usually your GitHub org/user name.
  projectName: 'Rayyan06.github.io', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects', // Unique ID for projects
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: './sidebars.js', // Points to your first sidebar file
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: './sidebarWiki.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'M.R.K.',
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Projects',
            to: '/projects/overview/',
            items: [
              { to: '/projects/foam-cutting-cnc', label: 'Foam Cutting CNC' },
              { to: '/projects/optical-encoder', label: 'Optical Encoder' },
            ],
          },
          {
            type: 'doc',
            docsPluginId: 'wiki',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Rayyan06/Rayyan06.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'M.R.K. Portfolio',
            items: [
              {
                label: 'Wiki',
                to: '/wiki/avr-programming/overview',
              },
            ],
          } /*
          {
            title: 'Community',
            items: [
             
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/,
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About',
                to: 'about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Rayyan06/AVR-Programming',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Muhammed Rayyan Khan`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // announcementBar: {
      //   id: 'under development',
      //   content: 'This website is continuously being updated.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
    }),
};

export default config;
