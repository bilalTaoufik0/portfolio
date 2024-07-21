const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    mode: 'development',
    plugins: [
        new webpack.ContextReplacementPlugin(
            /three[\\/]examples[\\/]jsm[\\/]physics/,
            path.resolve(__dirname, 'src') // Ajustez le chemin si nécessaire
        ),
    ],
    stats: {
        errorDetails: true
    }
};