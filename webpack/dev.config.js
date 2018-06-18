const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : './src/entry.js',
    output : {
        path : path.resolve(__dirname, '../dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : [/\.js$/, /\.jsx$/],
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname, 'dist'),
        filename : 'bundle.js',
        hot : true
    },
    plugins : [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}