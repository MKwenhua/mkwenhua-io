const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const sourceAliases = {
  stylesheet: path.resolve(__dirname, 'src/shared/styles'),
  container: path.resolve(__dirname, 'src/shared/containers'),
  component: path.resolve(__dirname, 'src/shared/components'),
  page: path.resolve(__dirname, 'src/shared/pages')
}

const CssLoad = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(Object.assign({
    fallback: {
      loader: require.resolve('style-loader'),
      options: {
        hmr: false
      }
    },
    use: [
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          minimize: true,
          modules: true,
          sourceMap: process.env.NODE_ENV === 'development'
        }
      }, {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  }, {}))
  // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
};

const StyleLoader = {
  test: /\.css$/,
  exclude: /Global.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          minimize: process.env.NODE_ENV === 'production'
        }
      }
    ]
  })
}

const GlobalStyleLoader = {
  test: /Global.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: false,
          minimize: process.env.NODE_ENV === 'production'
        }
      }
    ]
  })
}

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: sourceAliases
  },
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: [
          /\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/
        ],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
       StyleLoader,
       GlobalStyleLoader,
      {
        test: [
          /\.js$/, /\.jsx$/
        ],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "public/css/[name].css"}),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  bail: true,
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "react_pages.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: sourceAliases
  },
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: [
          /\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/
        ],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
       StyleLoader,
       GlobalStyleLoader,
      {
        test: [
          /\.js$/, /\.jsx$/
        ],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "public/css/[name].css"}),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = [browserConfig, serverConfig];
