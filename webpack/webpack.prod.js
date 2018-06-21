const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode : 'production',
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
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}