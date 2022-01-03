/*var express = require('express');  
var app = express(); 

app.get('/',function(req,res){
    console.log('hello');
})


app.listen(8888,function(req,res){
    console.log('listen on posr 8000');
})
*/
var http=require("http");

console.log("Server listening on port no 8000");

http.createServer(function(req,res){
	
	res.end("Hello node!");

}).listen(8000);