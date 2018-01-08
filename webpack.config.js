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

const StyleLoader = {
  test: /\.css$/,
  exclude: /Global.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        // fallback: 'style-loader',

        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          minimize: process.env.NODE_ENV === 'production'
        }
      },
      // {
      //   loader: "postcss-loader",
      //   options: { plugins: [autoprefixer()] }
      // }
    ]
  })
}

const GlobalStyleLoader = {
  test: /Global.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        // fallback: 'style-loader',

        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: false,
          minimize: process.env.NODE_ENV === 'production'
        }
      },
      // {
      //   loader: "postcss-loader",
      //   options: { plugins: [autoprefixer()] }
      // }
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
  devtool: "cheap-module-source-map",
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
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: sourceAliases
  },
  devtool: "cheap-module-source-map",
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
      //{
      //   test: /\.css$/,
      //   use: [
      //     // {
      //     //   loader: "css-loader/locals",
      //     //
      //     // },
      //     {
      //       loader: "css-loader",
      //       // fallback: 'style-loader',
      //
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //         modules: true,
      //         minimize: process.env.NODE_ENV === 'production'
      //       }
      //     }
      //     // {
      //     // loader: 'postcss-loader',
      //     //  options: {
      //     //    ident: 'postcss',
      //     //    plugins: (loader) => [
      //     //      //require('postcss-import')({ root: loader.resourcePath }),
      //     //      autoprefixer()
      //     //    ]
      //     //  }
      //     //}
      //   ]
      // },
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

module.exports = [browserConfig, serverConfig];
