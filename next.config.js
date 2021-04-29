const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "content-type",
            value: "text/html; charset=utf-8", // Matched parameters can be used in the value
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins([[optimizedImages]], nextConfig);
