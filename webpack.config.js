var webpack = require('webpack'),
    path = require('path'),
    BUILD_DIR = path.resolve(__dirname, 'build'),
    APP_DIR = path.resolve(__dirname, 'app'),
    config = {
        entry: {
            app: APP_DIR + '/index.jsx',
            vendor: ['jquery', 'react', 'react-dom']
        },
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js'
        },
        module : {
            loaders : [
                {
                    test : /\.jsx?/,
                    include : APP_DIR,
                    loader : 'babel-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDom: 'react-dom',
                $: 'jquery'
            })
        ]
    };

module.exports = config;