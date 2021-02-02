const express = require('express');
const path = require('path');

const app = express();

const videos = require('./src/videos');

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', videos);

function notFoundHandler(req,res,next) { // eslint-disable-line
    const title = "Fannst ekki";
    const message = "Ó nei, efnið fannst ekki";
    res.status(404).render('error', {title, message});
}

function errorHandler(err,req,res,next) { // eslint-disable-line
    console.error(err);
    const title = "Villa kom upp";
    const message = "";
    res.status(500).render('error', {title, message});
}

app.use(notFoundHandler);
app.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port,hostname,() => {
    console.info("Server running at http://${hostname}:${port}/");
});