const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: "/vuekey/",
  transpileDependencies: true,
});