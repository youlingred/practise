const path= require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')
module.exports = {
    mode:'development',
    entry: {
        app:'./src/index.js',
        // print:'./src/print.js'
    },
    output:{
        filename:'[name].js',
        path: path.resolve('./build'),
        // publicPath:'/sss'
    },
    devtool:'inline-source-map',
    devServer:{
        hot:true,
        contentBase:'./dist'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new WebpackManifestPlugin(),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}