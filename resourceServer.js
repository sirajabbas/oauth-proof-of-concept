/**
 * Author: Siraj
 * Created on Jun 13 2021
 * entry point of resource server
 */
const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    routes = require('./routes/'),
    utils=require('./utils/')
    app = express();

//request logging
app.use(morgan('dev'));
app.use(require('morgan')('combined', {"stream": utils.logger.stream}));

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));

//cors handling
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,authorization,X-Requested-With');
    next();
});

//declaring routes
app.use('/api/author', routes.authorRoutes);
app.use('/api/book', routes.bookRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Resource Server is running on PORT: ${process.env.PORT}`);
});
