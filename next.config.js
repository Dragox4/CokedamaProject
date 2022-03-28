module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    "MYSQL_HOST":"138.128.160.186",
    "MYSQL_DATABASE":"cokedama_products",
    "MYSQL_USERNAME":"cokedama_user1",
    "MYSQL_PASSWORD":"nospecialchars123",
  }
};
