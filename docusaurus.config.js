// docusaurus.config.js
const config = {
  title: 'English OS',
  tagline: 'English for IT Professionals',
  url: 'https://dhnair.github.io',
  baseUrl: '/english-os/', // The name of your repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'dhnair', 
  projectName: 'english-os', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  themeConfig: {
    // Force Dark Mode for that "IDE" feel
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'English OS',
      items: [
        { 
            type: 'doc', 
            docId: 'modules/day_01_master_curriculum', // <-- Change this line
            position: 'left', 
            label: 'Documentation' 
        },
        { 
            href: 'https://linkedin.com/in/dhnair/', 
            label: 'LinkedIn', 
            position: 'right'
        },
      ],
    },
    // Adding your custom admonition icons or styling here later
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // This allows "English OS" to be the root of the site
          routeBasePath: '/', 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;