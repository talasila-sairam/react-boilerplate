const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require("cssnano");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        app: ['./src/assets/index.css','./src/app.jsx'],
        vendor:['react','react-dom','react-router-dom']
    },
    output: {
        path: path.resolve(__dirname,'./dist/js'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('../css/index.min.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: cssnano,
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader','style-loader',)
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    filename : 'vendor.bundle.js'
                },
            },
        }
    }
};