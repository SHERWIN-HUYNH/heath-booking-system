const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// init middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('etag');

// init db
require('./db/init');

// init router
app.use('/', require('./routes'));

// handle error
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    console.log('404 RUNNING')
    next(error);
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack:error.stack,
        message:error.message
    })
})
module.exports = app