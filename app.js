const express = require('express');
const connectDB = require('./config/db');
const connectDB = require('./routes/api/games');

const app = express();
connectDB();

app.get('/', function (req, res) {
  res.send('hello world')
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));