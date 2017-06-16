const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const pagesBuild = process.env.BUILD === 'pages';

/*********************************** Loaders ***********************************/
const loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
  },

  {
    test: /\.scss$/,
    loader: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources'].join('!'),
    include: path.join(__dirname, 'src'),
  },

  { // used for dependencies that don't support sass
    test: /\.css$/,
    loaders: ['style', 'css', 'postcss'],
  },

  {
    test: /\.svg$/,
    loader: 'file',
    include: path.join(__dirname, 'src'),
    exclude: path.join(__dirname, 'src/ui/Icon'),
  },
];

// Plugins used in all builds
const pluginsBase = [
  new HtmlWebpackPlugin({
    title: 'Colorizr',
    template: 'template.html',
  }),

  new FaviconsWebpackPlugin({
    logo: './favicon.png',
    background: '#ffeeee',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
];

const productionPlugins = [
  ...pluginsBase,
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
      sequences: true,
      booleans: true,
      loops: true,
      unused: false,
      warnings: false,
      drop_console: true,
      unsafe: true,
    },
  }),
];


module.exports = {
  devtool: production ? 'cheap-module-source-map' : 'eval',

  entry: production
    ? ['babel-polyfill', './src/index']
    : [
      'webpack-dev-server/client?http://localhost:3002',
      'babel-polyfill',
      './src/index',
    ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: pagesBuild ? '/colorizr/' : '/',
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },

  module: { loaders },
  plugins: production ? productionPlugins : pluginsBase,

  sassResources: ['./src/styles/variables.scss', './src/styles/mixins.scss'],
  postcss: [autoprefixer({ browsers: ['last 4 versions'] })],
};
