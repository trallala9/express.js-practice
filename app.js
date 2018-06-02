//console.log('Hello world');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //we use to simplify path


//initialize var app and set it to express function
var app = express();

//we need to listen our app on port
app.listen(3000, function () {

    console.log('Server started');
});
