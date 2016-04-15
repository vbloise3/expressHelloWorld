/**
 * Created by vincebloise on 4/14/16.
 */
var express = require("express");
var http = require("http");

var app = express();

app.use(function (request, response, next) {
    console.log("In comes a request to: ", request.url);
    next();
});

app.use(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello looser!");
})

http.createServer(app).listen(3001);
console.log("listening on port 3001");