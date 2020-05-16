const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

//usamos o module.exports para trabalhar como nodeJS
module.exports = {
    devtool: 'sourcemap',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, 
            {
                test: /\.css$/,
                use: [
                     'style-loader',
                     'css-loader'
                ],
            } 
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}
