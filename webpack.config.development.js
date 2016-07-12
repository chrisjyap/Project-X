var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
     './public/js/app/App.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'App.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 10 version'},
    { test: /\.json$/, loader: 'json-loader'}
  ]}
}
