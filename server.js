const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env= require('dotenv').config();
const db = require('./database/db')
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/userRoute');
const authroutes = require('./routes/authroute');


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api', authroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})