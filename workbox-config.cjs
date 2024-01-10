module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{css,html,js}"],
  swDest: "public/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|mp4|glb)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "assets-saransh3d",
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
