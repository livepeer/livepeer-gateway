/* Developement server */
/* eslint no-console: 0 */

import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import path from 'path'

const config = require('./config/webpack.config.web');

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
})

if (process.env.NODE_ENV !== 'production') {
    app.use(devMiddleware)
    app.use(webpackHotMiddleware(compiler))
}

const server = app.listen(PORT, 'localhost', err => {
    if (err) return console.error(err)
    console.log(`Listening at http://localhost:${PORT}`)
});

app.get('*', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>LivepeerGateway</title>
            <!-- vendor stylesheets -->
            <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:100,200,300,400,700">
            <link href="http://vjs.zencdn.net/6.2.4/video-js.css" rel="stylesheet">
            <!-- HRM or production stylesheet (see ./app/index.jsx) -->
            <link id="css-bundle" rel="stylesheet" type="text/css" href="../dist/style.css">
            <!-- vendor JavaScript -->
            <script src="http://vjs.zencdn.net/6.2.4/video.js"></script>
            <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
          </head>
          <body style="-webkit-app-region: drag">
            <div class="tray-arrow"></div>
            <div id="root"></div>
            <script src="http://localhost:${PORT}/dist/bundle.js"></script>
          </body>
        </html>
        `);
});

process.on('SIGTERM', () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Stopping dev server')
        devMiddleware.close()
    }
    server.close(() => process.exit(0))
})
