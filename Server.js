var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
// define routes here..


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/Sample.html');
});


app.get('/HomePage.html',function(req,res){

    res.sendFile(__dirname + '/public/HomePage.html');
});

app.get('/MyProfile.html',function(req,res){

    res.sendFile(__dirname + '/public/MyProfile.html');
});



//app.use(express.static(path.join(__dirname, '/')));

//app.use('/css',express.static(__dirname + '/css'));

app.use(bodyParser.urlencoded({extended: false}));
app.use('/css',express.static(path.join(__dirname + '/public/css')));


var server = app.listen(8083,function(){

    console.log("Node server is running");
});