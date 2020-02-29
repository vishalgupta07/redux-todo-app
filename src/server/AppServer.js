// import express (after npm install express)
import webpack from "webpack";
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config.js';
import path from 'path';
import express from 'express';


// create new express app and save it as "app"
const app = express();
const HTML_FILE = path.resolve(__dirname, '../index.html');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
}));

app.use(webpackHotMiddleware(compiler));

const PORT = 9000;

// create a route for the app
app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    })
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});