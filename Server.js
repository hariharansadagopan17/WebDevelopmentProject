var express = require('express');
var path = require('path');
var app = express();


// define routes here..
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/MyProfile.html');
});

app.get('/HomePage.html',function(req,res){

    res.sendFile(__dirname + '/HomePage.html');
});


//app.use(express.static(path.join(__dirname, '/')));

app.use('/css',express.static(__dirname + '/css'));


/*var server = http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

   response.write('Hello World');

   response.end();

});

server.listen(8083);*/

var server = app.listen(8083,function(){

    console.log("Node server is running");
});