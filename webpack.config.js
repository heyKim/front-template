const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: './src/index.js',
      module1: './src/module1.js',
      module2: './src/module2.js'
    },
    //path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'index',
            chunks: ["index"],
            template: path.join(__dirname, './src/index.html'),
            inject: true, // // Inject all scripts into the body
            filename: path.join(__dirname, './dist/index.html')
        }),
        new htmlWebpackPlugin({
            title: 'module1',
            chunks: ["module1"],
            //template: path.join(__dirname, './src/index.html'),
            template: path.join(__dirname, './src/index.html'),
            inject: true, // // Inject all scripts into the body
            filename: path.join(__dirname, './dist/module1.html')
        }),
        new htmlWebpackPlugin({
            title: 'module2',
            chunks: ["module2"],
            //template: path.join(__dirname, './src/index.html'),
            template: path.join(__dirname, './src/index.html'),
            inject: true, // // Inject all scripts into the body
            filename: path.join(__dirname, './dist/module2.html')
        })
    ],
};
