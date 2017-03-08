var path = require('path');
var MapPlugin = require('../../../index');
var mapPluginInstance = new MapPlugin({
    filename:'map.json',
    path: path.resolve(__dirname, '../../js/merge'),
    merge: true //跟文件的json数据进行合并
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('[name].[chunkhash:6].css');

module.exports = {
	entry: './index',
    output:{
        filename: '[name].[chunkhash:6].js'
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        loaders: [
            {
                test: /\.css$/,
                loader:extractLESS.extract('style-loader','css-loader')
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                loader: 'file?name=[name].[hash:6].[ext]'
            }
        ]
    },
	plugins: [
        extractLESS,
        mapPluginInstance
	]
}
