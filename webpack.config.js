var
path = require('path'),
webpack = require('webpack');

var appRoot = __dirname;

module.exports = {
    colors: true,
    watch: true,

    entry: {
        app: "./src/entry.js",
        vendor: [
            'babel-polyfill',
            'babel-runtime/regenerator',
            'babel-runtime/core-js',
            'react',
            'react-dom',
        ]
    },

    output: {
        path: path.join(appRoot, "./assets"),
        filename: "app.js"
    },

    resolve: {
        root: path.join(appRoot, "/"),
        modulesDirectories: ["node_modules"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: false,
                    presets: ['es2015', 'react', 'stage-2'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ],
};
