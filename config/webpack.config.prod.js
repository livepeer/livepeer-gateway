/* eslint max-len: 0 */
import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import baseConfig from '../webpack.config.base'

export default merge(baseConfig, {
    debug: true,

    devtool: 'cheap-module-eval-source-map',

    entry: './app/index',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],

    target: 'web'
});
