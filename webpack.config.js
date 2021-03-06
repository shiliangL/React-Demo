let path = require('path');
module.exports = {
    //入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    //模块
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    //服务
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 3000,
    }
}