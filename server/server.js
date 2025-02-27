const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const cors = require('cors');
// init middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('etag');

const PORT = 8000

app.get('/api/home', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})