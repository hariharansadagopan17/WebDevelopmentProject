var express = require('express');
var fs = require("fs");
var app = express();

// define routes here..
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/MyProfile.html');
});

app.get('/HomePage.html',function(req,res){

    res.sendFile(__dirname + '/HomePage.html');
});



var server = app.listen(8083, function () {
    console.log('Node server is running..');
});
