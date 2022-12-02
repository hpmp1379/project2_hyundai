module.exports = {
  staticFileGlobs: ["*.html", "css/*.css", "images/**.*", "js/*.js"],
  stripPrefix: "app/",
  runtimeCaching: [
    {
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: "networkFirst",
    },
  ],
};
