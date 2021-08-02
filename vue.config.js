// // module.exports = {
// //   css: { extract: false }
// // }
// // const path = require('path');
// const webpack = require("webpack");
// // const VueLoaderPlugin = require('vue-loader/lib/plugin')
// // const TerserPlugin = require('terser-webpack-plugin');
// // const JavaScriptObfuscator = require('webpack-obfuscator');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
// const TerserPlugin = require('terser-webpack-plugin');
// const compress = new CompressionWebpackPlugin(
//     {
//       // filename: info => {
//       //   return `${info.path}.gz${info.query}`
//       // },
//       algorithm: 'gzip',
//       threshold: 10240,
//       test:/\.js$|\.css$/,
//       minRatio: 0.8,
//       deleteOriginalAssets: false
//     }
// )
//
//
// module.exports = {
//   // publicPath:'/',
//   // outputDir:'dist',
//   productionSourceMap: false,
//   chainWebpack: config => {
//     config.plugins.delete('prefetch');
//     config.optimization.minimize(true);
//     config.optimization.splitChunks({
//       chunks: 'all'
//     });
//     config.module
//         .rule('images')
//         .use('image-webpack-loader')
//         .loader('image-webpack-loader')
//         .options({
//           bypassOnDebug: true
//         })
//         .end()
//
//   },
//   configureWebpack: {
//   //   // mode:'production',
//   //   // entry: './src/main.js',
//   //   // publicPath: '/dist/',
//   //   // filename: 'app.js',
//   //   // output: {
//   //   //   // path: path.resolve(__dirname,
//   //   //   //     '../monitglass-backend/src/main/resources/static/js/app'),
//   //   //   publicPath: '/dist/',
//   //   //   filename: 'app.js'
//   //   // },
//     plugins: [
//         compress,
//         // new HtmlWebpackPlugin({template: "./src/index.html"}),
//         new MiniCssExtractPlugin({filename: "[name].css"}),
//         // new FixStyleOnlyEntriesPlugin(),
//       new TerserPlugin(),
//       // new UglifyJsPlugin()
//   //     // new JavaScriptObfuscator({
//   //     //   identifierNamesGenerator: 'mangled'
//   //     // })
//     ],
//       module: {
//           // rules: [
//           //     {test: /\.css$/,
//           //         use: [MiniCssExtractPlugin.loader,"css-loader"]
//           //     }
//           // ]
//       },
//   //   // module: {
//   //   //   rules: [
//   //   //     {
//   //   //       test: /\.vue$/,
//   //   //       loader: 'vue-loader',
//   //   //       options: {
//   //   //         loaders: {}
//   //   //         // other vue-loader options go here
//   //   //       }
//   //   //     },
//   //   //     // {
//   //   //     //   test: /\.css$/,
//   //   //     //   use: [
//   //   //     //     'style-loader',
//   //   //     //     'css-loader'
//   //   //     //   ]
//   //   //     // },
//   //   //     {
//   //   //       test: /\.js$/,
//   //   //       loader: 'babel-loader',
//   //   //       exclude: /node_modules/
//   //   //     },
//   //   //     {
//   //   //       test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
//   //   //       loader: 'file-loader',
//   //   //       options: {
//   //   //         name: '[name].[ext]?[hash]'
//   //   //       }
//   //   //     },
//   //   //     // {
//   //   //     //   test: /\.s(c|a)ss$/,
//   //   //     //   use: [
//   //   //     //     'vue-style-loader',
//   //   //     //     'css-loader',
//   //   //     //     {
//   //   //     //       loader: 'sass-loader',
//   //   //     //       options: {
//   //   //     //         implementation: require('sass'),
//   //   //     //         // fiber: require('fibers'),
//   //   //     //         // indentedSyntax: true // optional
//   //   //     //       }
//   //   //     //     }
//   //   //     //   ]
//   //   //     // }
//   //   //   ]
//   //   // },
//     optimization: {
//       minimize: true,
//       minimizer: [
//         new TerserPlugin({
//           terserOptions: {
//             ecma: undefined,
//             warnings: false,
//             parse: {},
//             compress: {},
//             mangle: false, // Note `mangle.properties` is `false` by default.
//             module: false,
//             output: null,
//             toplevel: false,
//             nameCache: null,
//             ie8: false,
//             keep_classnames: undefined,
//             keep_fnames: false,
//             safari10: false,
//           },
//         }),
//         new UglifyJsPlugin({
//           cache: true,
//           parallel: true,
//           sourceMap: false,
//           extractComments: 'all',
//           uglifyOptions: {
//             compress: true,
//             output: null
//           }
//         }),
//         new OptimizeCSSAssetsPlugin({
//           cssProcessorOptions: {
//             safe: true,
//             discardComments: {
//               removeAll: true,
//             },
//           },
//         })
//       ],
//     },
//   },
//   devServer: {
//   //     //Enable gzip on the local server, all online servers support gzip, no need to set
//       before(app) {
//           app.get(/.*.(js)$/, (req, res, next) => {
//               req.url = req.url + '.gz';
//               res.set('Content-Encoding', 'gzip');
//               next();
//           })
//       }
//   },
//
//     css: { extract: false }
// }


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        if(config.plugins.has('extract-css')) {
            const extractCSSPlugin = config.plugin('extract-css')
            extractCSSPlugin && extractCSSPlugin.tap(() => [{
                filename: '[name].css',
                chunkFilename: '[name].css'
            }])
        }
    },
    configureWebpack: {
        plugins : [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: 'all',
                uglifyOptions: {
                    compress: true,
                    output: null,
                },
            }),
        ],
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        } ,
    }
}