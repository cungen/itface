var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function makeWebpackConfig(options) {
    var BUILD = !!options.BUILD;
    var config = {};

    /**
     * Dev tool
     */
    if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';

    }

    config.entry = {
        app: ['babel-polyfill', './client/index']
    };

    config.output = {
        path: './dist',
        filename: '[name].js',
        publicPath: BUILD ? '/dist' : 'http://localhost:8080/',
        chunkFilename: '[name].js'
    };

    // initialize module
    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    };

    config.module.loaders.push({
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
    });

    config.plugins = [
        new ExtractTextPlugin('[name].css', {
            disable: !BUILD
        })
    ];

    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './client/index.html',
            inject: 'body',
            minify: false
        })
    );

    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'common.js',
            name: 'common'
        })
    );

    if (BUILD) {
        config.plugins.push(
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        )
    }

    config.devServer = {
        contentBase: '.',
        stats: {
            modules: false,
            cached: true,
            colors: true,
            chunk: false
        },
        proxy: {
            '/api/*': {
                target: 'http://localhost:9888',
                rewrite: function(req) {
                  req.url = req.url.replace(/^\/api/, '');
                }
            }
        }
    };

    return config;
}

module.exports = makeWebpackConfig;
