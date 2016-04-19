/**
 * Created by vincebloise on 4/14/16.
 */
var express = require("express");
var logger = require("morgan");
var path = require("path");
var http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function(request, response) {
    response.end("Welcome to my homepage");
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page");
});

app.get("/weather", function(request, response) {
    response.end("The current weather is NICE");
});

app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
});

app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404");
});

app.use(function (request, response, next) {
    console.log("In comes a request to: ", request.url);
    next();
});

app.use(function(request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized");
    }
});

app.use(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('Secret info: the password is "PulpFiction"!');
});

http.createServer(app).listen(3001);
console.log("listening on port 3001");