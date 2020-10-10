const path = require('path')
const express = require('express')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

app.listen(3000, (req, res) => {
    console.log(`Listening to port ${port}`);
})