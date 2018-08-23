const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname),
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Minutemailer Uni',
            template: resolve(__dirname, './template.html'),
        }),
    ],
};
