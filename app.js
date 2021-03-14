const express = require('express')
const app = express()
const PORT = 3000;
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(PORT,()=>{
    console.log(`server has been starting in ${PORT} port...`)
})