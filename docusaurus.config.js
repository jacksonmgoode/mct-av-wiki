module.exports = {
  title: 'Can You Hear Me?',
  tagline: 'For all your confusing audio-video menagerie',
  url: 'https://jacksonmgoode.github.io',
  baseUrl: '/canyouhearme/',
  favicon: 'img/mct-logo.ico',
  organizationName: 'jacksonmgoode', // Usually your GitHub org/user name.
  projectName: 'canyouhearme', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CYHM?',
      logo: {
        alt: 'MCT Logo',
        src: 'img/mct-logo.png',
      },
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {to: 'blog', label: 'Guides', position: 'left'},
        {
          href: 'https://github.com/MCT-master',
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
              label: 'Overview',
              to: 'docs/overview',
            },
            {
              label: 'About',
              to: 'docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rzcKcxy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MCT-master',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MCT_master',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Music, Communications and Technology`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jacksonmgoode/canyouhearme/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
