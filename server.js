const data = require('./data')
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({path: './config/config.env'});

// import transaction routes
const transactions = require('./routes/transaction');
const { get_home, post_category, post_home } = require('./utils');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

const app=express();

// parse request data content type application
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

app.use(cors());

app.get('/',get_home)
app.post('/',post_home)
app.post('/add_category',post_category)
// create employee routes
// app.use('/api/v1/transactions',transactions);

// server port setup
const PORT = process.env.PORT || 5000;

// listen to port
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
