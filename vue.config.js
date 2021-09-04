// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // https://cli.vuejs.org/ru/config/#chainwebpack
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = "Realtime Chat with firebase";
      return args;
    });
  },
};
