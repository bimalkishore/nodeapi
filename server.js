const express = require('express');
const mongoose = require('mongoose');
const env= require('dotenv').config();
const db = require('./database/db')
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/userRoute');


const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})