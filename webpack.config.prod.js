const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: 'https://scottish-environment-protection-agency.github.io/Customer-Platform/',
  },
});
