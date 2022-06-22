const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
            port: 3010,
            compress: true,
            historyApiFallback: true,
            open: true,
            hot: true,
            liveReload: true
        },
});