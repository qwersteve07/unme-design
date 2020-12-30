const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages]], {
  exportTrailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/projects/cis",
        destination: "/projects",
      },
      {
        source: "/projects/interior",
        destination: "/projects",
      },
      {
        source: "/projects/literature",
        destination: "/projects",
      },
      {
        source: "/projects/space-branding",
        destination: "/projects",
      },
    ];
  },
});
