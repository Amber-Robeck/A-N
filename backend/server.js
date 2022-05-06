const express = require('express');

const app = express();

// const path = require("path");
const db = require('./config/connection');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
// Import routes
const adminRoute = require('./routes/admin');

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/admin', adminRoute);


//Routes
app.get('/', (req, res) => {
  res.send('home route')
});


//Server
db.once('open', () => {
  console.log('Mongoose DB connection established.')
});


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
});