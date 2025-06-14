import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '速查手册',
  tagline: 'Author: Wu Minlong',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wuminlong.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WuMinlong', // Usually your GitHub org/user name.
  projectName: 'wuminlong.github.io', // Usually your repo name.
  deploymentBranch: 'pages',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WuMinlong/wuminlong.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Wu Minlong',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          sidebarId: 'devToolsSidebar',
          position: 'left',
          label: '开发工具',
          items: [
            {
              type: 'doc',
              label: 'Git 使用',
              docId: 'dev-tools/git/README',
            },
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'progLangsSidebar',
          position: 'left',
          label: '编程语言',
          items: [
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'embeddedDevSidebar',
          position: 'left',
          label: '嵌入式开发',
          items: [
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'robotOsSidebar',
          position: 'left',
          label: '机器人开发',
          items: [
          ]
        },
        {
          href: 'https://github.com/WuMinlong',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} [Wu Minlong], Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
