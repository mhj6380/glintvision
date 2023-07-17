/* eslint-disable */
// next-i18next.config.js
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "ja", "en"],
  },
  localePath: path.resolve("./public/locales"),
};
