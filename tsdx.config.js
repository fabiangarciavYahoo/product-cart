const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config) {
    config.plugins = [
      postcss({
        modules: true,
      }),
      images({
        include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
      }),
      ...config.plugins,
    ];
    return config;
  },
};
