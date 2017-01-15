/* eslint-env node */
var webpack = require('webpack');


module.exports = {
    entry: {
        main: './js/main.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: './build/',
        publicPath: 'build/',
        sourceMapFilename: '[file].map',
    },
    resolve: {
        alias: {
            'mocha$': 'mocha/mocha.js',
            'jquery': 'jquery/dist/jquery',
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx|es6)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'es2016', 'stage-1'],
                    plugins: ['transform-runtime']
                }
            },
            { test: /\.css$/,                               loader: 'style!css' },
            { test: /\.(jpe?g|gif|png|svg)$/,               loader: 'file-loader?name=[name].[hash].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=.*)?$/, loader: 'file-loader?name=[name].[hash].[ext]' }
        ],
        // noParse: [
        //     /node_modules\/mocha\//,
        // ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',
            // 'Tether': 'tether'
        }),
    ],
};
