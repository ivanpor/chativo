const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var production = process.argv.reduce(function(p, c){return p || c == '-p'}, false)


var config = {
    context: path.join(__dirname, '/src/main/jsx'),
    entry: {
    	login:'./login/login.jsx',
    	chat:'./chat/chat.jsx',
        vendor: [
            'babel-polyfill',
            'react', 'react-dom'
        ],
    },
    devtool: production ? 'cheap-source-map' : 'source-map',
    output: {
//        path: path.resolve(__dirname, 'target/' + process.env.WAR_NAME + '/assets'),
    	path: __dirname + '/src/main/resources/static/js',
        filename: path.normalize('[name].js')/**,**/,
        publicPath: './build/'
    },
    module: {
        loaders: [
            {
                test: /\.less$|\.css$/,
                loader: production ? ExtractTextPlugin.extract('css?sourceMap!less?sourceMap'): 'style-loader!css?sourceMap!less?sourceMap'
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loaders: production ? ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'] : ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.normalize('[name].css')),
        new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.js', Infinity)
    ],
    stats:{
        children: false
    },
    devServer: {
    	host: '0.0.0.0',
    	port: 8080,
    	inline: true
    }
}


if(production){
    config.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    )

    config.plugins.push(new webpack.optimize.UglifyJsPlugin(
        {
            compress: {
                warnings: false
            }
        })
    )
}

module.exports = config