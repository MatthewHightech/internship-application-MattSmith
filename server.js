const http = require('http'); 
const path = require('path'); 
const fs = require('fs'); 
var express = require("express");
/*
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public' , 'index.html'),
         (err, content) => {
             if (err) throw err; 
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(content); 
        })
    }
});
*/
const app = express(); 

//adding static functionality for images
app.use(express.static('public'));
app.use(express.static('public/res'));

const PORT = process.env.PORT || 5000;

app.listen(PORT); 

