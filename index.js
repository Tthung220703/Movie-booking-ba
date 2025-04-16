const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { cookie } = require('request');
const PORT = 8000;
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db'); 

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000'];
app.use(
    cors({
        origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
        },
        credentials: true,
    })
)
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);    
})